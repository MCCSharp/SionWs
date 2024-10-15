
class accordion{

    constructor(element) {
        this.accordionELement = element;
        this.header = this.accordionELement.children[0];
        this.body = this.accordionELement.children[1];
        this.header.addEventListener('click', function () {
            this.parentElement.classList.toggle('toshow');
        });

    }
}

document.addEventListener("DOMContentLoaded", function () { 
    new accordion(document.querySelector('.accordion'))
})