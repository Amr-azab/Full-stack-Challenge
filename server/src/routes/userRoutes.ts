import express from "express";
import {
  login,
  protect,
  signup,
  logout,
  getMe,
} from "../controllers/userController";
import {
  getAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncementById,
  deleteAnnouncementById,
} from "../controllers/announcementsController";
import {
  createQuiz,
  getQuizzes,
  updateQuiz,
  deleteQuiz,
} from "../controllers/quizzesController";

export const router = express.Router();
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/getMe").get(protect, getMe);
router.route("/logout").post(protect, logout);
router.route("/getAnnouncement").get(protect, getAnnouncements);
router
  .route("/getAnnouncement/:AnnouncementId")
  .get(protect, getAnnouncementById);
router.route("/createAnnouncement").post(protect, createAnnouncement);
router.route("/createQuiz").post(protect, createQuiz);
router.route("/getQuizzes").get(protect, getQuizzes);
router
  .route("/updateAnnouncement/:AnnouncementId")
  .patch(protect, updateAnnouncementById);
router
  .route("/deleteAnnouncement/:AnnouncementId")
  .delete(protect, deleteAnnouncementById);
router.route("/updateQuiz/:quizId").patch(protect, updateQuiz);
router.route("/deleteQuiz/:quizId").delete(protect, deleteQuiz);
