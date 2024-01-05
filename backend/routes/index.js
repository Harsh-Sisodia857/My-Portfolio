const express = require("express");
const router = express.Router();
const Form = require("../models/Form")

router.post('/formData', async (req, res) => {
    try {
        const formData = await Form.create(req.body);
        // console.log(req.body)
        // console.log(formData)
        res.status(201).json({
            message: "Form data submitted successfully!",
            formData
        });
    } catch (error) {
        console.error("Error submitting form data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;