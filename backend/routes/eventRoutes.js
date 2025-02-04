import express from "express";
import Event from "../models/Event.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create an event booking
router.post("/book", authMiddleware, async (req, res) => {
  const { eventType, date, guests, location } = req.body;
  const newEvent = new Event({ user: req.user.id, eventType, date, guests, location });
  await newEvent.save();
  res.json({ message: "Event booked successfully" });
});

// Get user bookings
router.get("/", authMiddleware, async (req, res) => {
  const events = await Event.find({ user: req.user.id });
  res.json(events);
});

export default router;
