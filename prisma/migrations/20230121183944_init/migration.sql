-- CreateTable
CREATE TABLE "characterAttributes" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intellingence" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "characterSheet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "characterName" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "antecedent" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "daysSurvived" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-21 15:15:31.833239'::timestamp without time zone,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-21 15:15:31.833239'::timestamp without time zone
);

-- CreateTable
CREATE TABLE "characterStatus" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "CA" INTEGER NOT NULL,
    "totalLife" INTEGER NOT NULL,
    "actualLife" TEXT NOT NULL,
    "totalSanity" INTEGER NOT NULL,
    "actualSanity" TEXT NOT NULL,
    "deathSuccesses" INTEGER NOT NULL DEFAULT 0,
    "deathFailure" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-21 15:15:31.833239'::timestamp without time zone,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-21 15:15:31.833239'::timestamp without time zone
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-21 15:15:31.833239'::timestamp without time zone,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-21 15:15:31.833239'::timestamp without time zone
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-21 15:15:31.833239'::timestamp without time zone,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-21 15:15:31.833239'::timestamp without time zone
);

-- CreateIndex
CREATE UNIQUE INDEX "characterAttributes_id_key" ON "characterAttributes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterSheet_id_key" ON "characterSheet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterStatus_id_key" ON "characterStatus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_id_key" ON "sessions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "characterAttributes" ADD CONSTRAINT "characterAttributes_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "characterSheet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterSheet" ADD CONSTRAINT "characterSheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterStatus" ADD CONSTRAINT "characterStatus_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "characterSheet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
