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
            let title = document.getElementById("title");
            let titleChild = document.getElementById("declaration");
            let removeTitle = document.getElementById("removeTitle");
            let removeTag = document.getElementById("removeTag");
            let menu = document.getElementById("menu");

            setTimeout(function () {
                Velocity(
                    titleChild,
                    { opacity: 0 }
                )
            }, 0)

            setTimeout(function () {
                title.classList.remove("h-full")
                titleChild.classList.add("mt-8")
                menu.classList.add("mt-8")
                removeTitle.classList.add("hidden")
                removeTag.classList.add("hidden")
                menu.style.opacity = "0";
                menu.classList.remove("hidden")
                }, 500)

            setTimeout(function () {
                Velocity(titleChild, { opacity: 0.5})
                Velocity(menu, {opacity: 0.5})

            }, 1000)
        }
    }
})