import { prisma } from "@/config";
import { characterSheet } from "@prisma/client";
import { date } from "joi";

async function getUserSheets(userId: number) {
  return prisma.characterSheet.findMany({
    where: {
      userId
    }
  });
}

async function getUserSheetInformations(userId: number, sheetId: number) {
  return prisma.characterSheet.findFirst({
    where: {
      id: sheetId,  
      userId
    },
    include: {
      characterStatus: {
      },
      characterAttributes: {
      },
      characterDescription: {
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

async function updateCharacterSheet(sheetId: number, infos: Omit<characterSheet, "createdAt" | "updatedAt" | "userId" | "id">) {
  return prisma.characterSheet.update({
    where: {
      id: sheetId
    },
    data: {
      characterName: infos.characterName,
      function: infos.function,
      race: infos.race,
      daysSurvived: infos.daysSurvived,
      alignment: infos.alignment,
      updatedAt: new Date,
    }
  });
}

const sheetRepository = {
  getUserSheets,
  getUserSheetInformations,
  createSheet,
  updateCharacterSheet
};
  
export default sheetRepository;
