import { Response } from "express";
import httpStatus from "http-status";
import sheetService from "@/services/sheet-service";
import { AuthenticatedRequest } from "@/middlewares";

export async function listUserSheets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const sheets = await sheetService.listSheets(userId);
    res.status(httpStatus.OK).send(sheets);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function listSheetById(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { sheetId } = req.params;

  try {
    const sheet = await sheetService.listOneSheet(userId, Number(sheetId));
    res.status(httpStatus.OK).send(sheet);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function createSheet(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const sheetId = await sheetService.createUserSheet(Number(userId));
    res.status(httpStatus.CREATED).send(sheetId);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function updateSheetInfos(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const infos: {
    id: number
    characterName: string,
    function: string
    race: string,
    alignment: string,
    daysSurvived: number
  } = req.body;

  try {
    await sheetService.UpdateUserSheetInfo(infos);
    res.status(httpStatus.OK);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST);
  }
}
