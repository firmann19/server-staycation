const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middlewares/multer");

router.get("/dashboard", adminController.viewDashboard);
//endpoint category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

//endpoint bank
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);

//endpoint Item
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple,adminController.addItem);

router.get("/booking", adminController.viewBooking);

module.exports = router;
