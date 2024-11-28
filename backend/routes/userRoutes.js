const express = require("express");
const router = express.Router();
const MedicalRecord = require("../models/medicalRecordModel");

// Get all medical records
router.get("/", async (req, res) => {
  try {
    const records = await MedicalRecord.find();
    res.json(records);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get single record
router.get("/:id", async (req, res) => {
  try {
    const record = await MedicalRecord.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
