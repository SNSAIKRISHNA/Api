import asyncHandler from 'express-async-handler'

export const getGoal = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "Get goals" }); // routes /api/goal
});

export const postGoal = asyncHandler(async(req, res) => {
  if (!req.body.name) {
    return res.status(400)
    throw new Error('Please add a name')
  }
  return res.status(201).json({
    message: "Set goals",
  });
});

export const updateGoal =  asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` }); // routes /api/goal/:id
});

export const deleteGoal =  asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` }); // routes /api/goal/:id
});
