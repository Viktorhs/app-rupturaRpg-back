import sheetRepository from "@/repositories/sheet-repository";
import { characterSheet } from "@prisma/client";

async function listSheets(userId: number) {
  const sheets = await sheetRepository.getUserSheets(userId);
  return sheets;
}

async function listOneSheet(userId: number, sheetId: number) {
  const sheet = await sheetRepository.getUserSheetInformations(userId, sheetId);
  return sheet;
}

async function createUserSheet(userId: number) {
  const userSheets = await sheetRepository.getUserSheets(userId);

  if(userSheets.length > 5) {
    throw {
      name: "UnauthorizedError",
      message: "Maximum limit reached",
    };
  }

  const sheetId = await sheetRepository.createSheet;
  return sheetId;
}

async function UpdateUserSheetInfo(infos: Omit <characterSheet, "createdAt" | "updatedAt" | "userId">) {
  const updatedInfos = await sheetRepository.updateCharacterSheet(infos.id, {
    characterName: infos.characterName,
    function: infos.function,
    race: infos.race,
    alignment: infos.alignment,
    daysSurvived: infos.daysSurvived
  });
  return updatedInfos;
}
const sheetService = {
  listSheets,
  listOneSheet,
  createUserSheet,
  UpdateUserSheetInfo
};
    
export default sheetService;
