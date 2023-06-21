import express from "express"
import { addOrder, } from "../controllers/customer.js";
const router = express.Router();

router.post("/",addOrder);


export default router;