import express from "express"
import { getOrders, getSum  } from "../controllers/admin.js";
const router = express.Router();

router.get("/",getOrders);
router.get("/sum",getSum);


export default router;