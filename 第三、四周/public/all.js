$(document).ready( () => {
    bindEvents();
})

function bindEvents() {
    bindMainMenuToggler();
    bindArticleCataToggler();
    bindHamburgetToggler();
}

function activeToggle(event){
    var targetId = event.currentTarget.dataset.toggle;
    document.getElementById(targetId).classList.toggle("active")
}

function bindMainMenuToggler(){
    var target = document.getElementById("js-main-menu-toggler");
    if (target){
        target.addEventListener("click",activeToggle)
    }
}

function bindArticleCataToggler(){
    var target = $("#js-article-cata-toggler");
    var toggleTarget = $("#js-article-cata");
    
    if (target){
        target.click(()=>{
            target.toggleClass("active")
            toggleTarget.slideToggle()
        })
        matchMedia("(max-width:44em)").addListener((query)=>{
            if (!query.matches){
                document.getElementById("js-article-cata").style.display = "flex";
                document.getElementById("js-article-cata-toggler").classList.remove("active")
            }else{
                document.getElementById("js-article-cata").style.display = "none";
            }
        })
    }
}


function bindHamburgetToggler() {
    $(".hamburger__list__title").click(function(){
        $(this.nextElementSibling).slideToggle()
    })
}