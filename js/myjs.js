//========================================================================================================================================================

const openCompanyButton = document.querySelectorAll('.showCompanys');
const oppenedTab = document.querySelector('.tab');
const tabItems = oppenedTab.querySelectorAll('.tabItem');
const menu = document.querySelector('.menu')
const menuOpen = document.querySelector('.openMenu')
const closeMenu = menu.querySelector('.closeMenu')
const filter = document.querySelector('.filter')


function menuActivity(element) {
    if (element) {
        element.classList.toggle("showMenu");
    }
}

function tabActivity(element) {
    if (element) {
        element.classList.toggle("open");
    }
}

closeMenu.addEventListener('click', () => {
    menuActivity(menu)
    filter.classList.toggle("open");
    filter.classList.toggle("show");

})

menuOpen.addEventListener('click', () => {
    menuActivity(menu)
    filter.classList.toggle("open");
    filter.classList.toggle("show");

})

openCompanyButton.forEach(item => {
    item.addEventListener('click', () => {
        const icon = item.querySelectorAll('path')
        if (window.innerWidth <= 767) {
            item.classList.toggle("changeButton")
        }
        
        icon.forEach(i => {
            i.classList.toggle('changeSVG')
        })
        tabActivity(oppenedTab);
    });

});

tabItems.forEach(item => {
    item.addEventListener('click', () => {
        tabActivity(oppenedTab);
        openCompanyButton.forEach(item => {
            const icon = item.querySelectorAll('path')
            if (window.innerWidth <= 767) {
                item.classList.toggle("changeButton")
            }
            icon.forEach(i => {
                i.classList.toggle('changeSVG')
            })
        })
    });
});

// dropdown


   




