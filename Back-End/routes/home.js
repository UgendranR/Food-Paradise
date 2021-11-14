import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.send("Welcome to Food Paradise API")
});

export default router;