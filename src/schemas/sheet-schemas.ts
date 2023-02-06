import Joi from "joi";

export const characterSheetSchema = Joi.object({
  id: Joi.number().required(),
  characterName: Joi.string(),
  function: Joi.string(),
  race: Joi.string(),
  alignment: Joi.string(),
  daysSurvived: Joi.string()
});

export const characterStatusSchema = Joi.object({
  id: Joi.number().required(),
  sheetId: Joi.number().required(),
  CA: Joi.number(),
  speed: Joi.string(),
  totalLife: Joi.number(),
  actualLife: Joi.string(),
  totalSanity: Joi.number(),
  actualSanity: Joi.string(),
  deathSuccesses: Joi.number(),
  deathFailure: Joi.number()
});

export const characterAttributeSchema = Joi.object({
  id: Joi.number().required(),
  sheetId: Joi.number().required(),
  strength: Joi.number(),
  dexterity: Joi.number(),
  constitution: Joi.number(),
  intellingence: Joi.number(),
  wisdom: Joi.number(),
  charisma: Joi.number(),
});

export const characterDescriptionSchema = Joi.object({
  id: Joi.number().required(),
  sheetId: Joi.number().required(),
  age: Joi.string(),
  height: Joi.string(),
  weight: Joi.string(),
  eyes: Joi.string(),
  skin: Joi.string(),
  hair: Joi.string(),
  appearance: Joi.string(),
  languanges: Joi.string(),
  personality: Joi.string(),
  ideals: Joi.string(),
  bonds: Joi.string(),
  weaknesses: Joi.string(),
  features: Joi.string(),
  allies: Joi.string(),
  story: Joi.string()
});

export const characterWeaponsSchema = Joi.object({
  id: Joi.number().required(),
  sheetId: Joi.number().required(),
  name: Joi.string(),
  weight: Joi.string(),
  attack: Joi.string(),
  type: Joi.string(),
  damage: Joi.string(),
  property: Joi.string(),
  range: Joi.string(),
  maxMunition: Joi.string(),
  actualMunition: Joi.string()
});

export const characterDefensesSchema = Joi.object({
  id: Joi.number().required(),
  sheetId: Joi.number().required(),
  name: Joi.string(),
  weight: Joi.string(),
  CA: Joi.string(),
  modifications: Joi.string(),
});

export const characterItemsSchema = Joi.object({
  id: Joi.number().required(),
  sheetId: Joi.number().required(),
  money: Joi.string(),
  others: Joi.string(),
});

export const characterSkillsSchema = Joi.object({
  id: Joi.number().required(),
  sheetId: Joi.number().required(),
  skills: Joi.string(),
  talents: Joi.string(),
});

export const characterNotesSchema = Joi.object({
  id: Joi.number().required(),
  sheetId: Joi.number().required(),
  notes: Joi.string(),
});
