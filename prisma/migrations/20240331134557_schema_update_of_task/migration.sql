/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `task` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "task_id_idx";

-- CreateIndex
CREATE UNIQUE INDEX "task_userId_key" ON "task"("userId");

-- CreateIndex
CREATE INDEX "task_id_userId_idx" ON "task"("id", "userId");
