new Vue({
    el: '#title',
    data: {
    },
    methods: {
        beforeAppear: function(element) {
            // This can change the appearance of the title on load.
            // document.getElementById("title").style.color = "blue"
        },
        afterAppear: function(element) {
            let ref = this

            let title = document.getElementById("title")
            let titleChild = document.getElementById("declaration")
            let removeTitle = document.getElementById("removeTitle")
            let removeTag = document.getElementById("removeTag")
            let menu = document.getElementById("menu")
            let mainTitle = document.getElementById("mainTitle")
            let underline = document.getElementById("underline")
            let cardContainer = document.getElementById("card-container")
            let projectTitle = document.getElementById("project-title")

            setTimeout(function () {
                Velocity(
                    titleChild,
                    { opacity: 0 }
                )
            }, 0)

            setTimeout(function () {
                // Performing landing animation
                title.classList.remove("h-full")
                title.classList.add('h-24')
                mainTitle.classList.remove("text-6xl")
                mainTitle.classList.add('text-4xl')
                removeTitle.classList.add("hidden")
                removeTag.classList.add("hidden")
                cardContainer.classList.remove("hidden")
                projectTitle.classList.remove("hidden")



                // Displaying the menu
                menu.style.opacity = "0";
                menu.classList.remove("hidden")
                }, 500)

            setTimeout(function () {
                // Fade top menu back in, plus options.
                Velocity(titleChild, { opacity: 0.7})
                Velocity(menu, {opacity: 0.7})
            }, 1000)

            setTimeout(function () {
                // Fade in the underline
                Velocity(underline, { opacity: 0.8})
            }, 1250)

            setTimeout(function() {
                Velocity(projectTitle, { opacity: 1 })
                ref.displayCards(ref)
            }, 1500)


        },
        displayCards: function(ref) {
            let delay = 500;

            const staggerCards = document.querySelectorAll(".staggerCard");
            for (let i = 0; i < staggerCards.length; i++) {
                if (i == staggerCards.length -1) {
                    var wait = delay * [i]
                    console.log(wait)
                }
                setTimeout(function() {
                    Velocity(staggerCards[i], { opacity: 1 })
                }, delay * [i])
            }
            // Display the cookie bar after all the cards have been displayed.
            setTimeout(function(wait) {
                ref.displayCookie(wait)
            }, wait + 1000)
        },
        displayCookie: function(wait) {
            // Display the cookie bar
            let cookieBar = document.getElementById("cookie-consent")
            setTimeout(function() {
                Velocity(cookieBar, {opacity: 1})
            }, 250)
        }
    }
})