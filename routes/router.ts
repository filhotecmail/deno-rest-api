import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getAvengers,
  getAvengerByName,
} from "../controllers/avenger-controller.ts";

const router = new Router();

router.get("/api/v1/avengers", getAvengers);

router.get("/api/v1/avengers/:name", getAvengerByName);

export default router;
