import express from "express";
import {
  getGoal,
  postGoal,
  updateGoal,
  deleteGoal,
} from "../controller/goalController.js";

const router = express.Router();


// router.route('/').get(getGoal).post(postGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

router.get("/", getGoal);
router.post("/", postGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

export default router;
