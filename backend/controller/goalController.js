import asyncHandler from "express-async-handler";

import Goal from "../models/goalModel.js";

export const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ goals }); // routes /api/goal
});

export const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    return res.status(400);
    throw new Error("Please add a name");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  return res.status(201).json({
    goal,
  });
});

export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400).json({ message: "Goal is Not found" });
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ updatedGoal }); // routes /api/goal/:id
});

export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  await goal.deleteOne();

  res.status(200).json({
    id: req.params.id,
    message: "Goal deleted successfully",
  });
});
