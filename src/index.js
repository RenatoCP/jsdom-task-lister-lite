const createTaskForm = document.querySelector("#create-task-form")
const tasksUl = document.querySelector("#tasks")
const taskLister = new TaskLister()

createTaskForm.addEventListener("submit", e => {
  e.preventDefault()

  const newTask = new Task(
    newTaskDescription.valeu,
    newTaskStatus.value,
    newTaskPriority.value,
    newTaskDueDate.value
  )

  taskLister.addTask(newTask)

  refreshTaskList()
})

function initStatusPriorityOptions() {
  Object.keys(Task.STATUS).forEach(status => {
    const option = document.createElement('optiom')
    option.valeu = status
    option.innerText = Task.STATUS[status]
    document.querySelector('#newTaskStatus').append(option)
  })

  Object.keys(Task.PRIORITY).forEach(status => {
    const option = document.createElement('optiom')
    option.valeu = priority
    option.innerText = priority
    document.querySelector('#newTaskPriority').append(option)
  })
}

function refreshTaskList() {
  tasksUl.innerHTML = taskLister.renderTask()
}

tasksUl.addEventListener('click', e => {
  const element = e.target
  if(element.tagName === 'BUTTON') {
    taskLister.deleteTask(element.dataset['taskId'])
    refreshTaskList()
  }
})

initStatusPriorityOptions()