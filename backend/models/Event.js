import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  eventType: { type: String, enum: ["marriage", "birthday"], required: true },
  package: { type: String, required: true },
  date: { type: Date, required: true },
  guests: { type: Number, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
});

export default mongoose.model("Event", EventSchema);
