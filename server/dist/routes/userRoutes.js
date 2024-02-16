"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const announcementsController_1 = require("../controllers/announcementsController");
const quizzesController_1 = require("../controllers/quizzesController");
exports.router = express_1.default.Router();
exports.router.route("/signup").post(userController_1.signup);
exports.router.route("/login").post(userController_1.login);
// router.route("/getMe").get(protect, getMe);
exports.router.route("/logout").post(userController_1.protect, userController_1.logout);
exports.router.route("/getAnnouncement").get(userController_1.protect, announcementsController_1.getAnnouncements);
exports.router
    .route("/getAnnouncement/:AnnouncementId")
    .get(userController_1.protect, announcementsController_1.getAnnouncementById);
exports.router.route("/createAnnouncement").post(userController_1.protect, announcementsController_1.createAnnouncement);
exports.router.route("/createQuiz").post(userController_1.protect, quizzesController_1.createQuiz);
exports.router.route("/getQuizzes").get(userController_1.protect, quizzesController_1.getQuizzes);
exports.router
    .route("/updateAnnouncement/:AnnouncementId")
    .patch(userController_1.protect, announcementsController_1.updateAnnouncementById);
exports.router
    .route("/deleteAnnouncement/:AnnouncementId")
    .delete(userController_1.protect, announcementsController_1.deleteAnnouncementById);
exports.router.route("/updateQuiz/:quizId").patch(userController_1.protect, quizzesController_1.updateQuiz);
exports.router.route("/deleteQuiz/:quizId").delete(userController_1.protect, quizzesController_1.deleteQuiz);
