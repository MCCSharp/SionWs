

class Menu{

    constructor(element){
        this.element = element
        element.style.display = 'grid';
        element.style.gridTemplateColumns = '1fr auto 1fr';

        this.menu_link_ctn = document.querySelector('.menu-link_ctn');
        this.menu_link_ctn_child = this.menu_link_ctn.childNodes.innerHTML

        this.menu_img_ctn = document.querySelector('.menu_img_ctn');
        this.menu_img_ctn_child = this.menu_img_ctn.innerHTML
        // this.image = 'url(asset/svg/head-title.svg)'
        // this.menu_img_ctn.style.backgroundImage = image
        console.log(menu_img_ctn_child[1].childNodes[1].attributes[0].nodeValue)

        this.menu_link_ctn.addEventListener("mouseover", (e) => {console.log(e.target.innerHTML)
            for(let i = 0; i < menu_link_ctn_child.length; i++){
                if(menu_link_ctn_child[i].children[0].innerHTML === e.target.innerHTML){
                    console.log('true')
                    let image = `url(${menu_img_ctn_child[i].childNodes[1].attributes[0].nodeValue})`
                    menu_img_ctn.style.backgroundImage = image
                    console.log(image)
                }
            }
        })
        this.setStartBackgroundImage()
    }
    
    createDivWithClass(classname){
        let div = document.createElement('div')
        div.setAttribute('class', classname)
        return div
    }


    setStartBackgroundImage(imglink = 'url(asset/img/projekt_menu_img.jpg)'){
    }
}

function createDivWithClass(classname){
    let div = document.createElement('div');
    div.setAttribute('class', classname);
    return div
}


const menu_img_ctn = document.querySelector('.menu_img_ctn');
let menu_img_ctn_child = menu_img_ctn.children

const menu_link_ctn = document.querySelector('.menu-link_ctn');
let menu_link_ctn_child = menu_link_ctn.children



document.addEventListener("DOMContentLoaded", function(){
    new Menu(document.querySelector('#menu-grid'))
})