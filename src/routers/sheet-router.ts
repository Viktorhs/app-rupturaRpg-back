import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { listUserSheets, listSheetById, createSheet, updateSheetInfos } from "@/controllers";

const sheetRouter = Router();

sheetRouter
  .all("/*", authenticateToken)
  .get("/list", listUserSheets)
  .get("/:sheetId", listSheetById)
  .post("/create", createSheet)
  .put("/sheetInfos", updateSheetInfos);
// .put("/sheetStatus",  );
//.put("/sign-in", sessionPost)
//.put("/sign-in", sessionPost)
//.delete("/sign-in", sessionPost);

export { sheetRouter };
