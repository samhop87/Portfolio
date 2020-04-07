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
                ref.displayCards()
            }, 1500)


        },
        displayCards: function() {
            let delay = 500;

            const staggerCards = document.querySelectorAll(".staggerCard");
            for (let i = 0; i < staggerCards.length; i++) {
                setTimeout(function() {
                    Velocity(staggerCards[i], { opacity: 1 })
                }, delay * [i])
            }
        }
    }
})