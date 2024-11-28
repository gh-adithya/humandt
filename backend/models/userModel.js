// backend/models/medicalRecordModel.js
const mongoose = require("mongoose");

const medicalRecordSchema = mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    patientId: {
      type: String,
      required: true,
    },
    recordType: {
      type: String,
      required: true,
      enum: ["Consultation", "Lab Result", "Prescription", "Surgery"],
    },
    date: {
      type: Date,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    diagnosis: String,
    prescription: String,
    notes: String,
    attachments: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);
