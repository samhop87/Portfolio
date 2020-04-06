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
            let titleChild = document.getElementById("declaration");

            // TODO: Toggle a data attribute to show that the animation has finished, and bind a class to the title element, so that it adds a class on the transition.

            titleChild.classList.remove("justify-center");
        }
    }
})