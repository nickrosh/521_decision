import express from "express";

const app = express();
const port = process.env.PORT || 8080

const currency: number = 1000;

app.get("/", (req, res) => {
    res.send(`Well Done Typescript, you have $${currency}`);
})

app.listen(port, () => {
    console.log(`The application is running on port ${port}`)
})