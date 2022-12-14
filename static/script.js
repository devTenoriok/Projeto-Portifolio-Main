/**Criação da abertura e fechamento
 * do menu mobile
 */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list","bi-x")
    : menuMobile.classList.replace("bi-x","bi-list")
    body.classList.toggle("menu-nav-active")
});

/** Fechamento do menu 
 * mobile
 */

// const navItem = document.querySelector('.nav-item')

// navItem.forEach(item => {
//     item.addEventListener("click", () => {
//         if (body.classList.contains("menu-nav-active")){
//             body.classList.remove("menu-nav-active")
//             menuMobile.classList.replace("bi-x","bi-list")
//         }
//     })
// })


//animar todos os atributos da tela que tiver data anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {

    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    
    item.forEach((element) => {
        if (windowTop > element.offsetTop){
            element.classList.add("animate");
        } else{
            element.classList.remove("animate");
        }
    });


};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
})