import express from "express";

const app = express();
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send('Well Done Typescript, now will it run as a build?');
})

app.listen(port, () => {
    console.log(`The application is running on port ${port}`)
})