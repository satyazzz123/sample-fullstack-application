/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'DONE');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
