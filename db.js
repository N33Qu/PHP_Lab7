const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect(process.env.DB)
            .then(() => console.log("Connected to database successfully"))
            .catch(err => console.error("Database connection error:", err));
    } catch (error) {
        console.error("Could not connect to database:", error);
    }
};