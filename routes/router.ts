import { Router } from "https://deno.land/x/oak/mod.ts";
import getAvengers from "../controllers/avenger-controller.ts";

const router = new Router();

router.get("/api/v1/avengers", getAvengers);

export default router;
