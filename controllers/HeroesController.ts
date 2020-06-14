import {
  HandlerFunc,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import db from "../clients/MongoClient.ts";
import { ErrorHandler } from "../middlewares/ErrorMiddleware.ts";
import { Heroe } from "../models/Heroe.ts";

const database = db.getDatabase;
const heroes = database.collection("heroes");

export const createHeroe: HandlerFunc = async (c: Context) => {
  try {
    if (c.request.headers.get("content-type") !== "application/json") {
      throw new ErrorHandler("Invalid body", 422);
    }
    const body = await c.body();
    if (!Object.keys(body).length) {
      throw new ErrorHandler("Request body can not be empty!", 400);
    }
    const { name, heroeName } = body;

    const insertedEmployee = await heroes.insertOne({
      name,
      heroeName,
    });

    return c.json(insertedEmployee, 201);
  } catch (error) {
    throw new ErrorHandler(error.message, error.status || 500);
  }
};

export const findAll: HandlerFunc = async (c: Context) => {
  try {
    const allHeroes: Heroe[] = await heroes.find();
    return c.json(allHeroes);
  } catch (error) {
    throw new ErrorHandler(error.message, error.status || 500);
  }
};

export const findByName: HandlerFunc = async (c: Context) => {
  try {
    const { name } = c.params as { name: string };
    const heroe = await heroes.findOne({
      name,
    });

    if (heroe) {
      return c.json(heroe, 200);
    }

    throw new ErrorHandler("Heroe not found", 404);
  } catch (error) {
    throw new ErrorHandler(error.message, error.status || 500);
  }
};

export const update: HandlerFunc = async (c: Context) => {
  try {
    const { id } = c.params as { id: string };
    if (c.request.headers.get("content-type") !== "application/json") {
      throw new ErrorHandler("Invalid body", 422);
    }

    const body = (await c.body()) as {
      name?: string;
      heroeName: string;
    };

    if (!Object.keys(body).length) {
      throw new ErrorHandler("Request body can not be empty!", 400);
    }

    const heroe = await heroes.findOne({ _id: { $oid: id } });

    if (heroe) {
      const { matchedCount } = await heroes.updateOne(
        { _id: { $oid: id } },
        { $set: body }
      );
      if (matchedCount) {
        return c.string("Heroe updated successfully!", 204);
      }
      return c.string("Unable to update heroe");
    }
    throw new ErrorHandler("Heroe not found", 404);
  } catch (error) {
    throw new ErrorHandler(error.message, error.status || 500);
  }
};

export const deleteById: HandlerFunc = async (c: Context) => {
  try {
    const { id } = c.params as { id: string };
    const heroe = await heroes.findOne({ _id: { $oid: id } });

    if (heroe) {
      const deleteCount = await heroes.deleteOne({ _id: { $oid: id } });
      if (deleteCount) {
        return c.string("Heroe deleted successfully!", 204);
      }
      throw new ErrorHandler("Heroe to delete employee", 400);
    }

    throw new ErrorHandler("Heroe not found", 404);
  } catch (error) {
    throw new ErrorHandler(error.message, error.status || 500);
  }
};
