let vm = new Vue({
    el: '#app',
    data: {
        message: "Ceci est un message"
    },
    methods: {
        capitalizeMessage: function() {
            this.message = this.message.toUpperCase();
        }
    }
});