new Vue({
    el: '#title',
    data: {
        cookie: false,
        enter: this.$cookies.get('animation')
    },
    methods: {
        cookieClose: function () {
            this.$cookies.set('cookieRecord', 'saved', 0)
            this.cookie = this.$cookies.get('cookieRecord')
        },
        killTransition: function (el, done) {
            this.$refs.title.classList.add("hidden")
            done()
        },
        afterAppear: function (element) {
            let ref = this
            let underline = document.getElementById("underline")
            let projectTitle = document.getElementById("project-title")
            let cardContainer = document.getElementById("card-container")

            ref.$cookies.set('animation', 'enter', 0)

            this.landingAnimation(cardContainer, projectTitle)
            this.headerFadeIn(underline, projectTitle, ref)

        },
        landingAnimation: function (cardContainer, projectTitle) {
            let ref = this;

            setTimeout(function () {
                Velocity(
                    ref.$refs.declaration,
                    {opacity: 0}
                )
            }, 0)

            setTimeout(function () {
                // Performing landing animation
                ref.$refs.title.classList.remove("h-full")
                ref.$refs.title.classList.add('h-24')

                if (ref.enter === "enter") {
                    ref.$refs.title.classList.remove("hidden")
                }

                ref.$refs.mainTitle.classList.remove("text-6xl")
                ref.$refs.mainTitle.classList.add('text-4xl')
                ref.$refs.removeTitle.classList.add("hidden")
                ref.$refs.removeTag.classList.add("hidden")
                cardContainer.classList.remove("hidden")
                projectTitle.classList.remove("hidden")

                // Displaying the menu
                ref.$refs.menu.style.opacity = "0";
                ref.$refs.menu.classList.remove("hidden")
            }, 500)

        },
        headerFadeIn: function (underline, projectTitle, ref) {
            setTimeout(function () {
                // Fade top menu back in, plus options.
                Velocity(ref.$refs.declaration, {opacity: 0.7})
                Velocity(ref.$refs.menu, {opacity: 0.7})
            }, 1000)

            setTimeout(function () {
                // Fade in the underline
                Velocity(underline, {opacity: 0.8})
            }, 1250)

            setTimeout(function () {
                // Display the 'projects' title and project cards.
                Velocity(projectTitle, {opacity: 1})
                ref.displayCards(ref)
            }, 1500)
        },
        displayCards: function (ref) {

            let delay = this.enter ? 1 : 500;

            const staggerCards = document.querySelectorAll(".staggerCard");
            for (let i = 0; i < staggerCards.length; i++) {
                if (i == staggerCards.length - 1) {
                    var wait = delay * [i]
                }
                setTimeout(function () {
                    Velocity(staggerCards[i], {opacity: 1})
                }, delay * [i])
            }
            // Display the cookie bar after all the cards have been displayed.
            setTimeout(function (wait) {
                ref.displayCookie(wait)
            }, wait + 1000)
        },
        displayCookie: function (wait) {
            // Display the cookie bar
            let cookieBar = document.getElementById("cookie-consent")

            setTimeout(function () {
                Velocity(cookieBar, {opacity: 1})
            }, 250)
        },
        contactDisplay: function () {
            let title = document.getElementById("project-title")
            let cards = document.getElementById("card-container")
            let contact = document.getElementById("contact-form")

            switch (parseInt(title.style.opacity)) {
                case 0:
                    // Hide contact form
                    setTimeout(function () {
                        Velocity(contact, {opacity: 0})
                    }, 200)
                    contact.classList.add("hidden")

                    // Re-display cards and title
                    title.classList.remove("hidden")
                    cards.classList.remove("hidden")
                    setTimeout(function () {
                        Velocity(title, {opacity: 1})
                        Velocity(cards, {opacity: 1})
                    }, 200)
                    break;
                case 1:
                    // Hide the cards and title
                    setTimeout(function () {
                        Velocity(title, {opacity: 0})
                        Velocity(cards, {opacity: 0})
                    }, 200)
                    title.classList.add("hidden")
                    cards.classList.add("hidden")

                    // Display the contact form
                    contact.classList.remove("hidden")
                    setTimeout(function () {
                        Velocity(contact, {opacity: 1})
                    }, 200)
                    break;
            }
        }
    }
})