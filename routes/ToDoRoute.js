const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  deleteToDo,
  updateToDo,
  updateStatus,
} = require("../controllers/ToDoController");

const router = Router();

router.post("/", getToDo);
router.post("/updateStatus", updateStatus);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;
