import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { deleteSheet, listUserSheets, listSheetById, createSheet, updateSheetInfos, updateSheetAttributes, updateSheetStatus, updateSheetDescription, updateSheetWeapons, updateSheetDefenses, updateSheetItems, updateSheetSkills, updateSheetNotes } from "@/controllers";

const sheetRouter = Router();

sheetRouter
  .all("/*", authenticateToken)
  .get("/list", listUserSheets)
  .get("/:sheetId", listSheetById)
  .post("/create", createSheet)
  .put("/infos", updateSheetInfos)
  .put("/status",  updateSheetStatus)
  .put("/attributtes", updateSheetAttributes)
  .put("/description", updateSheetDescription)
  .put("/weapons", updateSheetWeapons)
  .put("/defenses", updateSheetDefenses)
  .put("/items", updateSheetItems)
  .put("/skills", updateSheetSkills)
  .put("/Notes", updateSheetNotes)
  .delete("/:sheetId", deleteSheet);

export { sheetRouter };
