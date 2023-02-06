export type CharacterSheetEntity = {
    id: number
    characterName?: string,
    function?: string
    race?: string,
    alignment?: string,
    daysSurvived?: number
}

export type CharacterStatusEntity = {
    id: number,
    sheetId: number,
    CA?: number,
    speed?: string,
    totalLife?: number,
    actualLife?: string,
    totalSanity?: number,
    actualSanity?: string,
    deathSuccesses?: number,
    deathFailure?: number
}

export type CharacterAttributesEntity = {
    id: number,
    sheetId: number,
    strength?: number,
    dexterity?: number,
    constitution?: number,
    intellingence?: number,
    wisdom?: number,
    charisma?: number,
}

export type CharacterDescriptionEntity = {
    id: number,
    sheetId: number,
    age?: string,
    height?: string,
    weight?: string,
    eyes?: string,
    skin?: string,
    hair?: string,
    appearance?: string,
    languages?: string,
    personality?: string,
    ideals?: string,
    bonds?: string,
    weaknesses?: string,
    features?: string,
    allies?: string,
    story?: string,
}

export type CharacterWeaponsEntity = {
    id: number,
    sheetId: number,
    name?: string,
    weight?: string,
    attack?: string,
    type?: string,
    damage?: string,
    property?: string,
    range?: string,
    maxMunition?: string,
    actualMunition?: string,
}

export type CharacterDefensesEntity = {
    id: number,
    sheetId: number,
    name?: string,
    weight?: string,
    CA?: string,
    modifications?: string,
}

export type CharacterItemsEntity = {
    id: number,
    sheetId: number,
    money?: string,
    others?: string,
}

export type CharacterSkillsEntity = {
    id: number,
    sheetId: number,
    skills?: string,
    talents?: string,
}
export type CharacterNotesEntity = {
    id: number,
    sheetId: number,
    notes?: string,
}
