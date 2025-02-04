import express from "express";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({ destination: "uploads/", filename: (req, file, cb) => cb(null, file.originalname) });
const upload = multer({ storage });

router.post("/upload", upload.single("image"), (req, res) => {
  res.json({ message: "Image uploaded successfully", filePath: `/uploads/${req.file.filename}` });
});

export default router;
