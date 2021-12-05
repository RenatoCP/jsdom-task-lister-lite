class TaskLister {
    constructor() {
        this.task = []
    }

    addTask (task) {
        this.tasks.push(task)
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter (task => task.id !== taskId)
    }

    renderTask() {
        const displayTasks = this.tasks.map(task => task.print())

        return displayTasks.join("")
    }
}