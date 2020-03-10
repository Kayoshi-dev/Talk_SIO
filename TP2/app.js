let vm = new Vue({
    el: '#app',
    data: {
        newTask: '',
        task: []
    },
    methods: {
        addTask: function () {
            this.task.push(this.newTask);
            this.newTask = '';
        },
        removeTask: function (todo) {
            this.task.splice(this.task.indexOf(todo), 1);
        }
    }
});