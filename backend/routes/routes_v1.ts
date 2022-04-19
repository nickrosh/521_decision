import { Router } from "express";
import { search, health } from "../controllers/controller_v1";

const router = Router();

router.get('/', health)

router.get('/search', search)

export default router