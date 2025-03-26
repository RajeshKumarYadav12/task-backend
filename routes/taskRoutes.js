const express = require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

// Fetch all tasks
router.get("/", getTasks);

// Create a new task
router.post("/add", createTask);

// Update an existing task
router.put("/update/:id", updateTask);

// Delete a task
router.delete("/delete/:id", deleteTask);

module.exports = router;
