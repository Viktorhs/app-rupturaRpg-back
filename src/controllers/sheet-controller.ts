import { CharacterSheetEntity, CharacterStatusEntity, CharacterAttributesEntity, CharacterDescriptionEntity, CharacterWeaponsEntity, CharacterDefensesEntity, CharacterItemsEntity, CharacterSkillsEntity, CharacterNotesEntity } from "./../protocols";
import { Response } from "express";
import httpStatus from "http-status";
import sheetService from "@/services/sheet-service";
import { AuthenticatedRequest } from "@/middlewares";
import { characterAttributeSchema, characterDefensesSchema, characterDescriptionSchema, characterItemsSchema, characterNotesSchema, characterSheetSchema, characterSkillsSchema, characterStatusSchema, characterWeaponsSchema } from "@/schemas";

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
  const infos: CharacterSheetEntity = req.body;

  const isValid = characterSheetSchema.validate({ infos });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }
  try {
    await sheetService.updateUserSheetInfo(infos, userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function updateSheetStatus(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const infos: CharacterStatusEntity = req.body;

  const isValid = characterStatusSchema.validate({ infos });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }
  try {
    await sheetService.updateUserSheetStatus(infos, userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function updateSheetAttributes(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const infos: CharacterAttributesEntity = req.body;

  const isValid = characterAttributeSchema.validate({ infos });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }
  try {
    await sheetService.updateUserSheetAttributes(infos, userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function updateSheetDescription(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const infos: CharacterDescriptionEntity = req.body;

  const isValid = characterDescriptionSchema.validate({ infos });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }
  try {
    await sheetService.updateUserSheetDescription(infos, userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function updateSheetWeapons(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const infos: CharacterWeaponsEntity = req.body;

  const isValid = characterWeaponsSchema.validate({ infos });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }
  try {
    await sheetService.updateUserSheetWeapons(infos, userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function updateSheetDefenses(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const infos: CharacterDefensesEntity = req.body;

  const isValid = characterDefensesSchema.validate({ infos });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }
  try {
    await sheetService.updateUserSheetDefenses(infos, userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function updateSheetItems(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const infos: CharacterItemsEntity = req.body;

  const isValid = characterItemsSchema.validate({ infos });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }
  try {
    await sheetService.updateUserSheetItems(infos, userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function updateSheetSkills(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const infos: CharacterSkillsEntity = req.body;

  const isValid = characterSkillsSchema.validate({ infos });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }
  try {
    await sheetService.updateUserSheetSkills(infos, userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function updateSheetNotes(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const infos: CharacterNotesEntity = req.body;

  const isValid = characterNotesSchema.validate({ infos });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }
  try {
    await sheetService.updateUserSheetNotes(infos, userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}

export async function deleteSheet(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { sheetId } = req.params;
  try {
    await sheetService.deleteUserSheet(Number(sheetId), userId);
    res.status(httpStatus.OK);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      res.status(httpStatus.UNAUTHORIZED);
    }
    res.status(httpStatus.BAD_REQUEST);
  }
}
