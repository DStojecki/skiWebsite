const burgerIcon = document.querySelector(".fa-bars")
const xIcon = document.querySelector(".fa-times")
const menu = document.querySelector("nav")

const items = [burgerIcon, xIcon, menu]
const icons = [burgerIcon, xIcon]

for (let i = 0; i < icons.length; i++) {

    icons[i].addEventListener('click', function () {

        for (let i = 0; i < items.length; i++) {
            items[i].classList.toggle("active");
        }

    })
}


const list = [...document.querySelectorAll("nav ul li")]
const dives = document.querySelectorAll("body section div.section")

for (i = 0; i < list.length; i++) {

    list[i].addEventListener("click", function () {

            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove("active")
                dives[i].classList.remove("active")
            }


            this.classList.add("active");
            dives[list.findIndex(li => li.classList.contains("active"))].classList.add("active")

        }

    )
}


const firstBtn = document.querySelector(".info");

firstBtn.addEventListener("click", function () {
    dives[0].classList.toggle("active");
    dives[4].classList.toggle("active");

    list[0].classList.toggle("active")
    list[4].classList.toggle("active")
})