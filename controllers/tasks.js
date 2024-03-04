const Task = require("../modals/task");

const getalltask = (req, res) => {
  res.send("get task");
};
const posttask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const patchtask = (req, res) => {
  res.json(req.params.id);
};
const getsingletask = (req, res) => {
  res.json(req.params.id);
};
const deletetask = (req, res) => {
  res.json(req.params.id);
};

module.exports = {
  getalltask,
  posttask,
  patchtask,
  deletetask,
  getsingletask,
};
