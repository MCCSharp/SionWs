const hamburgermenu = document.querySelector(".menu-burger")
    const headermenu = document.querySelector(".header-menu")

    hamburgermenu.addEventListener('click', ()=>{
    headermenu.classList.toggle('burger-menu')
    })