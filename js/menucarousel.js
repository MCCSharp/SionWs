

class Menu{
    
    constructor(element){
        
        this.element = element
        this.element.style.display = 'grid';
        this.element.style.gridTemplateColumns = '1fr 1fr';
        
        this.menu_link_ctn = this.element.children[1];
        this.menu_link_ctn_child = [].slice.call(this.menu_link_ctn.children[0].children)
        
        this.menu_img_ctn = this.element.children[0];
        this.menu_img_ctn_child = this.menu_img_ctn.children
        
        
        this.menu_link_ctn.addEventListener("mouseover", (e) => {console.log(e.target.innerHTML)
            for(let i = 0; i < this.menu_link_ctn_child.length; i++){
                if(this.menu_link_ctn_child[i].children[0].innerHTML === e.target.innerHTML){
                    console.log('true')
                    let image = `url(${this.menu_img_ctn_child[i].childNodes[1].attributes[0].nodeValue})`
                    this.menu_img_ctn.style.backgroundImage = image
                    console.log(image)
                    console.log(this.element)
                    console.log(this.menu_img_ctn.style.backgroundImage)
                }
            }
        })
    }}
    
    function createDivWithClass(classname){
        let div = document.createElement('div');
        div.setAttribute('class', classname);
        return div
}

    const header_ctn = document.body.children[0]
    const close_btn = header_ctn.querySelector('.close-ctn')

    close_btn.addEventListener("click", (e) => {
    // e.currentTarget.parentElement.classList.remove('displayMenu')
    e.currentTarget.parentElement.parentElement.classList.remove('displayMenu')
    nav_menu_btn.classList.remove('hide_nav')
    debugger
    })
    
    
    
    const menu_ctn_bckg = document.querySelector('.menu-ctn-bckg')
    const burger_menu = document.querySelector('.burger-menu')
    const nav_menu_btn = document.querySelector('.nav-menu-btn')
    const menu_ctn = document.querySelector('.menu-ctn')
    burger_menu.addEventListener("click", () => {
        nav_menu_btn.classList.add('hide_nav')
        // menu_ctn.classList.add('displayMenu')
        menu_ctn_bckg.classList.add('displayMenu')
    })
    
    
    
    document.addEventListener("DOMContentLoaded", function(){
        new Menu(document.querySelector('#menu-grid'))
    })