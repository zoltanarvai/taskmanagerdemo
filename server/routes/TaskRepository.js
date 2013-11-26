var uuid = require('node-uuid');

function TaskRepository() {

    if (!(this instanceof TaskRepository)) {
        return new TaskRepository();
    }

    this.tasks = [
        {
            id: uuid(),
            name: "Prepare Lunch",
            deadline: new Date(),
            priority: 2
        }
    ];
}

function findTask(taskId) {

    var foundTask = null;

    for (var i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === taskId) {
            foundTask = this.tasks[i];
            break;
        }
    }

    return foundTask;
}

TaskRepository.prototype.getTasks = function () {
    return this.tasks;
};

TaskRepository.prototype.getTask = function (taskId) {
    return findTask.apply(this, [taskId]);
};

TaskRepository.prototype.createTask = function (newTask) {
    newTask.id = uuid();
    this.tasks.push(newTask);

    return newTask.id;
};

TaskRepository.prototype.updateTask = function (updatedTask) {
    var taskToUpdate = findTask.apply(this, [updatedTask.id]);

    if (taskToUpdate) {
        //taskToUpdate.name = updatedTask.name;
        //taskToUpdate.deadline = updatedTask.deadline;
        //taskToUpdate.priority = updatedTask.priority;

        for (var i in taskToUpdate) {
            if (taskToUpdate.hasOwnProperty(i)) {
                taskToUpdate[i] = updatedTask[i];
            }
        }

        return true;
    }

    return false;
};

TaskRepository.prototype.deleteTask = function (taskId) {
    var taskToDelete = findTask.apply(this, [taskId]);

    if (taskToDelete) {
        var index = this.tasks.indexOf(taskToDelete);

        this.tasks.splice(index, 1);
        return true;
    }

    return false;
};

module.exports = TaskRepository;