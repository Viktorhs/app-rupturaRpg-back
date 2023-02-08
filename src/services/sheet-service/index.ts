import { CharacterSheetEntity, CharacterStatusEntity, CharacterAttributesEntity, CharacterDescriptionEntity, CharacterWeaponsEntity, CharacterDefensesEntity, CharacterItemsEntity, CharacterSkillsEntity, CharacterNotesEntity } from "./../../protocols";
import sheetRepository from "@/repositories/sheet-repository";

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

  const sheetId = await sheetRepository.createSheet(userId);
  return sheetId;
}

async function updateUserSheetInfo(infos: CharacterSheetEntity, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, infos.id);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }
  const data = {
    characterName: infos.characterName,
    function: infos.function,
    race: infos.race,
    alignment: infos.alignment,
    daysSurvived: infos.daysSurvived };

  const updatedInfos = await sheetRepository.updateCharacterSheet(data, infos.id);
  return updatedInfos;
}

async function updateUserSheetStatus(infos: CharacterStatusEntity, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, infos.sheetId);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }

  const data = {
    CA: infos.CA,
    speed: infos.speed,
    totalLife: infos.totalLife,
    actualLife: infos.actualLife,
    totalSanity: infos.totalSanity,
    actualSanity: infos.actualSanity,
    deathSuccesses: infos.deathSuccesses,
    deathFailure: infos.deathFailure };

  const updatedInfos = await sheetRepository.updateCharacterStatus(data, infos.id);
  return updatedInfos;
}

async function updateUserSheetAttributes(infos: CharacterAttributesEntity, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, infos.sheetId);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }

  const data = {
    strength: infos.strength,
    dexterity: infos.dexterity,
    constitution: infos.constitution,
    intellingence: infos.intellingence,
    wisdom: infos.wisdom,
    charisma: infos.charisma };

  const updatedInfos = await sheetRepository.updateCharacterAttributes(data, infos.id);
  return updatedInfos;
}

async function updateUserSheetDescription(infos: CharacterDescriptionEntity, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, infos.sheetId);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }

  const data = {
    age: infos.age,
    height: infos.height,
    weight: infos.weight,
    eyes: infos.eyes,
    skin: infos.skin,
    hair: infos.hair,
    appearance: infos.appearance,
    languages: infos.languages,
    personality: infos.personality,
    ideals: infos.ideals,
    bonds: infos.bonds,
    weaknesses: infos.weaknesses,
    features: infos.features,
    allies: infos.allies,
    story: infos.story, };

  const updatedInfos = await sheetRepository.updateCharacterDescription(data, infos.id);
  return updatedInfos;
}

async function updateUserSheetWeapons(infos: CharacterWeaponsEntity, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, infos.sheetId);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }

  const data = {
    name: infos.name,
    weight: infos.weight,
    attack: infos.attack,
    type: infos.type,
    damage: infos.damage,
    property: infos.property,
    range: infos.range,
    maxMunition: infos.maxMunition,
    actualMunition: infos.actualMunition, };

  const updatedInfos = await sheetRepository.updateCharacterWeapons(data, infos.id);
  return updatedInfos;
}

async function updateUserSheetDefenses(infos: CharacterDefensesEntity, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, infos.sheetId);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }

  const data = {
    name: infos.name,
    weight: infos.weight,
    CA: infos.CA,
    modifications: infos.modifications, };

  const updatedInfos = await sheetRepository.updateCharacterDefenses(data, infos.id);
  return updatedInfos;
}

async function updateUserSheetItems(infos: CharacterItemsEntity, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, infos.sheetId);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }

  const data = {
    money: infos.money,
    others: infos.others, };

  const updatedInfos = await sheetRepository.updateCharacterItems(data, infos.id);
  return updatedInfos;
}

async function updateUserSheetSkills(infos: CharacterSkillsEntity, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, infos.sheetId);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }

  const data = {
    skills: infos.skills,
    talents: infos.talents, };

  const updatedInfos = await sheetRepository.updateCharacterSkills(data, infos.id);
  return updatedInfos;
}

async function updateUserSheetNotes(infos: CharacterNotesEntity, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, infos.sheetId);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }

  const data = {
    notes: infos.notes, };

  const updatedInfos = await sheetRepository.updateCharacterNotes(data, infos.id);
  return updatedInfos;
}

async function deleteUserSheet(sheetId: number, userId: number) {
  const verifyUser = await sheetRepository.getUserSheetInformations(userId, sheetId);
  if(!verifyUser.id) {
    throw {
      name: "UnauthorizedError",
    };
  }

  return await sheetRepository.deleteSheet(sheetId);
}

const sheetService = {
  listSheets,
  listOneSheet,
  createUserSheet,
  updateUserSheetInfo,
  updateUserSheetStatus,
  updateUserSheetAttributes,
  updateUserSheetDescription,
  updateUserSheetWeapons,
  updateUserSheetDefenses,
  updateUserSheetItems,
  updateUserSheetSkills,
  updateUserSheetNotes,
  deleteUserSheet
};
    
export default sheetService;
