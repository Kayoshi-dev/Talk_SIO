Vue.component('Compteur', {
    data: function() {
        return {
            compteur: 0
        }
    },
    template:
        '<div>' +
            '<button @click="compteur++">' +
                '{{ compteur }}!' +
            '</button>' +
        '</div>'
});

let vm = new Vue({
    el: '#app'
});