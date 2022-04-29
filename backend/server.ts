import express from "express";
import router from "./routes/routes_v1";
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 8080

app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`The application is running on port ${port}`);
});
