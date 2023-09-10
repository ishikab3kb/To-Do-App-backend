const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const { completed, incomplete } = req.body;
  let query = {};
  if (completed & incomplete) {
    query = {};
  } else if (completed) {
    query = { completed: true };
  } else if (incomplete) {
    query = { completed: false };
  }
  console.log(query);
  try {
    const toDo = await ToDoModel.find(query);
    res.send(toDo);
  } catch (error) {
    res.status(500).json({ error: "Error fetching ToDo items." });
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text, completed } = req.body;
  ToDoModel.create({ text, completed })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.updateStatus = async (req, res) => {
  const { _id, completed } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { completed })
    .then((data) => {
      console.log("Updated Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};
