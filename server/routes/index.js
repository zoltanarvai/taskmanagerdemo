var TaskRepository = require("./TaskRepository");
var repository = new TaskRepository();

exports.index = function(req, res){
  res.send("Task Manager Web API");
};

exports.getTasks = function(req, res){
    var tasks = repository.getTasks();
    res.send(tasks);
};

exports.getTask = function(req, res){
    var taskId = req.params.id;

    if(taskId){
        var task = repository.getTask(taskId);
        if(task){
            res.send(task);
        }else{
            res.send(404, "No such task");
        }
    }else{
        res.send(400, "Missing Id");
    }

};

exports.createTask = function(req, res){

    var taskToCreate = req.body;

    if(taskToCreate.name && taskToCreate.deadline && taskToCreate.priority){

        var newTask = {
            name: taskToCreate.name,
            deadline: taskToCreate.deadline,
            priority: taskToCreate.priority
        };

        var newTaskId = repository.createTask(newTask);

        if(newTaskId){
            res.send(201, newTask);
        }else{
            res.send(500, "Failed to create Task");
        }
    }else{
        res.send(400, "Missing property");
    }
};

exports.updateTask = function(req, res){
    var taskToUpdate = req.body;

    if(taskToUpdate.id && taskToUpdate.name && taskToUpdate.deadline && taskToUpdate.priority){

        var isSuccessful = repository.updateTask(taskToUpdate);

        if(isSuccessful){
            res.send(200);
        }else{
            res.send(500, "Failed to update Task");
        }
    }else{
        res.send(400, "Missing property");
    }
};

exports.deleteTask = function(req, res){
    var taskId = req.params.id;

    if(taskId){

        var isSuccessful = repository.deleteTask(taskId);

        if(isSuccessful){
            res.send(200);
        }else{
            res.send(500, "Failed to delete (or find) task.")
        }

    }else{
        res.send(400, "Missing Id");
    }
};