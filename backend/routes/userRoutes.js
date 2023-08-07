import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// POST Auth /api/users/auth
// @access Public
router.post("/", registerUser);

// POST Auth /api/users/auth
// @access Public
router.post("/auth", authUser);

// POST Auth /api/users/auth
// @access Public
router.post("/logout", logoutUser);

// POST & PUT Profile /api/users/profile
// @access Private
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
