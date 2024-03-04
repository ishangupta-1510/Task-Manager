const getalltask = (req, res) => {
  res.send("get task");
};
const posttask = (req, res) => {
  res.json(req.body);
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
