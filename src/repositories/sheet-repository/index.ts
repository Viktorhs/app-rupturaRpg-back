import { CharacterSheetEntity, CharacterStatusEntity, CharacterAttributesEntity, CharacterDescriptionEntity, CharacterWeaponsEntity, CharacterDefensesEntity, CharacterItemsEntity, CharacterSkillsEntity, CharacterNotesEntity  } from "./../../protocols";
import { prisma } from "@/config";

async function getUserSheets(userId: number) {
  return prisma.characterSheet.findMany({
    where: {
      userId
    },
    include: {
      characterDescription: {
        select: {
          appearance: true
        }
        }
      }
    }
  );
}

async function getUserSheetInformations(userId: number, sheetId: number) {
  return prisma.characterSheet.findFirst({
    where: {
      id: sheetId,  
      userId
    },
    include: {
      characterStatus: {
        where: {
          sheetId
        }
      },
      characterAttributes: {
        where: {
          sheetId
        }
      },
      characterDescription: {
        where: {
          sheetId
        }
      },
      characterWeapons: {
        where: {
          sheetId
        }
      },
      characterDefenses: {
        where: {
          sheetId
        }
      },
      characterItems: {
        where: {
          sheetId
        }
      },
      characterSkills: {
        where: {
          sheetId
        }
      },
      characterNotes: {
        where: {
          sheetId
        }
      }

    }
  });
}

async function createSheet(userId: number) {
  const sheetId =  await prisma.characterSheet.create({
    data: {
      userId
    }
  });

  await prisma.$transaction([
    prisma.characterAttributes.create({
      data: {
        sheetId: sheetId.id
      }
    }),
    prisma.characterDefenses.create({
      data: {
        sheetId: sheetId.id
      }
    }),
    prisma.characterDescription.create({
      data: {
        sheetId: sheetId.id
      }
    }),
    prisma.characterItems.create({
      data: {
        sheetId: sheetId.id
      }
    }),
    prisma.characterNotes.create({
      data: {
        sheetId: sheetId.id
      }
    }),
    prisma.characterSkills.create({
      data: {
        sheetId: sheetId.id
      }
    }),
    prisma.characterStatus.create({
      data: {
        sheetId: sheetId.id
      }
    }),
    prisma.characterWeapons.create({
      data: {
        sheetId: sheetId.id
      }
    }),
  ]);

  return {
    sheetId: sheetId.id
  };
}

async function updateCharacterSheet(infos: Omit<CharacterSheetEntity, "id">, id: number) {
  return prisma.characterSheet.update({
    where: {
      id: id
    },
    data: {
      ...infos,
      updatedAt: new Date,
    }
  });
}

async function updateCharacterStatus(status: Omit<CharacterStatusEntity, "id" | "sheetId">, id: number) {
  return prisma.characterStatus.update({
    where: {
      id: id,
    },
    data: {
      ...status,
      updatedAt: new Date,
    }
  });
}

async function updateCharacterAttributes(attributes: Omit<CharacterAttributesEntity, "id" | "sheetId">, id: number) {
  return prisma.characterAttributes.update({
    where: {
      id: id,
    },
    data: {
      ...attributes,
      updatedAt: new Date,
    }
  });
}

async function updateCharacterDescription(description: Omit<CharacterDescriptionEntity, "id" | "sheetId">, id: number) {
  return prisma.characterDescription.update({
    where: {
      id: id,
    },
    data: {
      ...description,
      updatedAt: new Date,
    }
  });
}

async function updateCharacterWeapons(weapons: Omit<CharacterWeaponsEntity, "id" | "sheetId">, id: number) {
  return prisma.characterWeapons.update({
    where: {
      id: id,
    },
    data: {
      ...weapons,
      updatedAt: new Date,
    }
  });
}

async function updateCharacterDefenses(defenses: Omit<CharacterDefensesEntity, "id" | "sheetId">, id: number) {
  return prisma.characterDefenses.update({
    where: {
      id: id,
    },
    data: {
      ...defenses,
      updatedAt: new Date,
    }
  });
}

async function updateCharacterItems(items: Omit<CharacterItemsEntity, "id" | "sheetId">, id: number) {
  return prisma.characterItems.update({
    where: {
      id: id,
    },
    data: {
      ...items,
      updatedAt: new Date,
    }
  });
}

async function updateCharacterSkills(skills: Omit<CharacterSkillsEntity, "id" | "sheetId">, id: number) {
  return prisma.characterSkills.update({
    where: {
      id: id,
    },
    data: {
      ...skills,
      updatedAt: new Date,
    }
  });
}
async function updateCharacterNotes(notes: Omit<CharacterNotesEntity, "id" | "sheetId">, id: number) {
  return prisma.characterNotes.update({
    where: {
      id: id,
    },
    data: {
      ...notes,
      updatedAt: new Date,
    }
  });
}

async function deleteSheet(sheetId: number) {
  return await prisma.$transaction([
    prisma.characterAttributes.deleteMany({
      where: {
        sheetId
      }
    }),
    prisma.characterDefenses.deleteMany({
      where: {
        sheetId
      }
    }),
    prisma.characterDescription.deleteMany({
      where: {
        sheetId
      }
    }),
    prisma.characterItems.deleteMany({
      where: {
        sheetId
      }
    }),
    prisma.characterNotes.deleteMany({
      where: {
        sheetId
      }
    }),
    prisma.characterSkills.deleteMany({
      where: {
        sheetId
      }
    }),
    prisma.characterStatus.deleteMany({
      where: {
        sheetId
      }
    }),
    prisma.characterWeapons.deleteMany({
      where: {
        sheetId
      }
    }),
  ]);
}

const sheetRepository = {
  getUserSheets,
  getUserSheetInformations,
  createSheet,
  updateCharacterSheet,
  updateCharacterStatus,
  updateCharacterAttributes,
  updateCharacterDescription,
  updateCharacterWeapons,
  updateCharacterDefenses,
  updateCharacterItems,
  updateCharacterSkills,
  updateCharacterNotes,
  deleteSheet
};
  
export default sheetRepository;
