class Carousel{

/**
 * This callback is displayed as part of the Requester class.
 * @callback moveCallbacks
 * @param {number} index
 */

    /**
     * Creates an instance of Carousel.
     * @param {HTMLElement} element 
     * @param {Object} [options={}] 
     * @param {Object} [options.slidesToScroll=1] nombre d'element a faire defiler
     * @param {Object} [options.slidesIsVisible=1] nombre d'element visible dans un slide
     * @param {boolean} [options.loop=false] doit on boucler en fin de carousel
     * 
     * @memberOf Carousel
     */
    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({} ,{
            slidesToScroll: 1,
            slidesIsVisible: 1,
            loop: false
        }, options)
        let children = [].slice.call(element.children)
        this.isMobile=false
        this.currentItem = 0
        this.moveCallbacks = []

        //Modification de DOM
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel__container')
        this.root.setAttribute('tabindex', '0')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.items = children.map((child) =>{
            let item = this.createDivWithClass('carousel__item')
            
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        });
        this.setStyle()
        this.createNavigatation()


        //Evenements
        this.moveCallbacks.forEach(cb => cb(0))
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))
        this.root.addEventListener('keyup', e =>{
            if(e.key === 'ArrowRight'){
                this.next()
            }else if(e.key === 'ArrowLeft'){
                this.prev()
            }
        })
    }

    /**
     * 
     *  Applique les bonnes dimension aux element du carousel
     * 
     * @memberOf Carousel
     */
    setStyle (){
        let ratio = this.items.length / this.slidesIsVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => item.style.width = ((100 / this.slidesIsVisible) / ratio) + "%");
    }


    createNavigatation(){
        let nextButton = this.createDivWithClass('carousel__next')
        let prevButton = this.createDivWithClass('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click',this.next.bind(this) )
        prevButton.addEventListener('click',this.prev.bind(this) )
        if(this.options.loop===true){
            return
        }
        this.onMove(index => {
            if(index === 0){
                prevButton.classList.add('carousel__prev--hidden')
            }else{
                prevButton.classList.remove('carousel__prev--hidden')
            }

            if(this.items[this.currentItem + this.slidesIsVisible] === undefined){
                nextButton.classList.add('carousel__next--hidden')
            }else{
                nextButton.classList.remove('carousel__next--hidden')
            }
        })
    }

    next(){
        this.goToItem(this.currentItem + this.slidesToScroll)

    }

    prev(){
        this.goToItem(this.currentItem - this.slidesToScroll)

    }


    /**
     * 
     * Deplace le carousel vers l'element cible
     * @param {number} index
     * 
     * @memberOf Carousel
     */
    goToItem(index){

        if(index < 0){
            if(this.options.loop){
                index=this.items.length - this.slidesIsVisible
            }else{
                return
            }
        }else if(index >= this.items.length || (this.items[this.currentItem + this.slidesIsVisible] === undefined && index > 
            this.currentItem)){
                if(this.options.loop){
                    index= 0
                }else{
                    return
                }
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX +'%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }

    /**
     * 
     * 
     * @param {moveCallback} cb - The callback that handles the response.
     * 
     * @memberOf Carousel
     */
    onMove(cb){
        this.moveCallbacks.push(cb)

        
    }

    onWindowResize(){
        let mobile = window.innerWidth < 800
        if(mobile !== this.isMobile){
            this.isMobile = mobile
            this.setStyle()
            this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
    }

    /**
     * 
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     * 
     * @memberOf Carousel
     */
    createDivWithClass(className){
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

    /**
     * @returns {number} retourne 1 si la largeure de l'ecran est celle d'un mobile
     * 
     * @readonly
     * 
     * @memberOf Carousel
     */
    get slidesToScroll(){
        return this.isMobile ? 1 : this.options.slidesToScroll
    }

    /**
     * * @returns {number} retourne 1 si la largeure de l'ecran est celle d'un mobile
     * 
     * @readonly
     * 
     * @memberOf Carousel
     */
    get slidesIsVisible(){
        return this.isMobile ? 1 : this.options.slidesIsVisible
    }
}


document.addEventListener("DOMContentLoaded", function(){
//apres le chargement du DOM
    new Carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 2,
        slidesIsVisible: 3,
        loop: true
    })

    new Carousel(document.querySelector('#carousel2'), {
        slidesToScroll: 2,
        slidesIsVisible: 2,
        loop: false
    })


    new Carousel(document.querySelector('#carousel3'), {

    })
})
