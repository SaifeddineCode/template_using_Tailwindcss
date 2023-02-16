/*burger Animation */
let navMenu = document.querySelector(".nav-menu")


let burger = document.querySelector(".burger")
let lineOne = document.querySelector(".lineOne")
let lineTwo = document.querySelector(".lineTwo")
let lineThree = document.querySelector(".lineThree")

burger.addEventListener("click",function(){
    lineOne.classList.toggle("top-4")
    lineThree.classList.toggle("top-4")
    lineOne.classList.toggle("transformOne")
    lineThree.classList.toggle("top-6")
    lineTwo.classList.toggle("hidden");
    lineThree.classList.toggle("tranformTwo");


    navMenu.classList.toggle("showNav")
    
})

// let dropdownMenu = document.querySelector(".dropdown-menu")
// let dropItem = document.querySelector(".dropdown-item")


// dropdownMenu.addEventListener("click",function(){
    
//     dropItem.classList.toggle("visible")
//     dropItem.classList.toggle("opacity-100")
//     dropItem.classList.toggle("top-7")

// })





/*######### Catégories Part */

let catégories  = document.querySelectorAll(".categories .catEle")

catégories.forEach((e)=>{
    e.addEventListener("click", function(){
        catégories.forEach((e)=>{
            e.classList.remove("categorActive");
        })
        this.classList.add("categorActive")
    })
})


let hphones = document.querySelectorAll(".hphones");
let headphones = document.querySelector(".headphones");
let tcomputer=document.querySelectorAll(".tcomputer");
let typingComptuer = document.querySelector(".typingComptuer");

tcomputer.forEach((e)=>{
    e.addEventListener("click",function(){
        /*######## increasing Opacity #########*/
        typingComptuer.classList.add("opacity-100")
        headphones.classList.remove("opacity-100")
        headphones.classList.add("opacity-0")
        /*######## increasing scale #########*/
        typingComptuer.classList.add("scale-100")
        headphones.classList.add("scale-95")
        headphones.classList.remove("scale-100")

        if(typingComptuer.classList.contains("flex")){
            console.log("good")
        }else{
            typingComptuer.classList.add("flex");
        }
    })
})


hphones.forEach((e)=>{
    e.addEventListener("click",function(){
        /*######## increasing Opacity #########*/
        headphones.classList.add("opacity-100")
        typingComptuer.classList.remove("opacity-100")
        typingComptuer.classList.add("opacity-0")
        /*######## increasing scale #########*/
        headphones.classList.add("scale-100")
        typingComptuer.classList.add("scale-95")
        typingComptuer.classList.remove("scale-100")

        if(typingComptuer.classList.contains("flex")){
            console.log("good")
        }else{
            typingComptuer.classList.add("flex");
        }
    })
})


/*############## maintile . CTA .. */


let mainTitle = document.querySelector(".mainTitle")
let mainP = document.querySelector(".mainP")
let cta = document.querySelector(".cta")
let cta2 = document.querySelector(".cta2")



mainTitle.style.opacity ="0"
mainTitle.style.marginTop ="10px"
mainTitle.style.transition ="0.5s"

mainP.style.opacity ="0"
mainP.style.transition ="1s"

cta.style.opacity ="0"
cta.style.marginTop = "10px"
cta.style.transition ="1.5s"

cta2.style.opacity ="0"
cta2.style.marginTop = "20px"
cta2.style.transition ="2s"


window.onload = function(){
    mainTitle.style.marginTop ="0px"
    mainTitle.style.opacity ="1"

    mainP.style.opacity ="1"

    cta.style.marginTop = "0px"
    cta.style.opacity ="1"

    cta2.style.marginTop = "0px"
    cta2.style.opacity ="1"
}


/* #################### */

let secondSection = document.querySelector(".secondSection")
let colA = document.querySelector(".colA")
let colB = document.querySelector(".colB")
let colC = document.querySelector(".colC")


// colA.addEventListener("click",function(){
//     console.log("hello world")
// })

colA.style.marginTop ="100px"
colA.style.transition ="0.7s"
colA.style.opacity ="0"

colB.style.marginTop ="100px"
colB.style.transition ="1s"
colB.style.opacity ="0"

colC.style.marginTop ="100px"
colC.style.transition ="1.5s"
colC.style.opacity ="0"


window.onscroll = function(){
    if(window.scrollY > secondSection.offsetTop - 300 ){
        colA.style.marginTop ="0px"
        colA.style.opacity ="1"

        colB.style.marginTop ="0px"
        colB.style.opacity ="1"

        colC.style.marginTop ="0px"
        colC.style.opacity ="1"
    }
}

