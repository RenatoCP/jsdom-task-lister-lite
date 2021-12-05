class Task {
    static ALL = []

    static STATUS = {
        todo: "to do",
        inProgress: "in progress",
        completed: "completed"
}

    static PRIORITY = {
        low: 1,
        medium: 2,
        high: 3
    }

    id
    description
    status
    priority
    dueDate

    constructor(description = 'Task Description', status = Task.STATUS.todo, priority = Task.PRIORITY.low, dueDate = Date.now()){
        this.id = Date.now().toString()
        this.description = description
        this.status = status
        this.priority = priority
        this.dueDate = dueDate
    
        Task.ALL.push(this)
    }


}

