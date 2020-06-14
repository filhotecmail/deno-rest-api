import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import "https://deno.land/x/denv/mod.ts";
import { ErrorMiddleware } from "./middlewares/ErrorMiddleware.ts";
import {
  createHeroe,
  findAll,
  findByName,
  deleteById,
  update,
} from "./controllers/HeroesController.ts";

const app = new Application();

app.use(ErrorMiddleware);

app
  .get("/heroes", findAll)
  .get("/heroes/:name", findByName)
  .post("/heroe", createHeroe)
  .put("/heroes/:id", update)
  .delete("/heroes/:id", deleteById)
  .start({ port: Number(Deno.env.get("PORT")) });

console.log(
  `Deno is running at ${Deno.env.get("HOST")}:${Deno.env.get("PORT")}`
);
