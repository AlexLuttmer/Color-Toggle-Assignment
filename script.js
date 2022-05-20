const getMainSection = document.querySelector(".main-section");
const getDropMenuIcon = document.querySelector(".drop-menu-icon");
const getDropMenu = document.querySelector(".drop-menu");
const getColorButtons = document.querySelectorAll(".drop-menu-btns")

let dropDownMenu = function () {

    getDropMenuIcon.addEventListener('click', function () {
        getDropMenu.classList.toggle("drop-menu-hide")
    })

    Array.from(getColorButtons).forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            let currentColor = getMainSection.classList[1];
            let chosenColor = event.target.classList[1]; 
            getMainSection.classList.remove(currentColor)
            getMainSection.classList.add(chosenColor)
            getDropMenu.classList.toggle("drop-menu-hide")
        })
    });

}

dropDownMenu();
