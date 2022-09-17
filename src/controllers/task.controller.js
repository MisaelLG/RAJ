import Task from "../models/Task";

export const createTask = async (req, res) => {
  const { name, category, description } = req.body;

  const newTask = new Task({ name, category, description });

  const taskSave = await newTask.save();

  res.status(201).json(taskSave);
  console.log(taskSave);
};
export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};
export const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.taskId);
  res.status(200).json(task);
};
export const updateTaskById = async (req, res) => {
  const updateTask = await Task.findByIdAndUpdate(
    req.param.taskId,
    req.body,
    {
      new: true
    }
  )
  res.status(200).json(updateTask);
  
};
export const deleteTaskById = async (req, res) => {};
