-- DropIndex
DROP INDEX "user_id_idx";

-- CreateIndex
CREATE INDEX "user_id_email_idx" ON "user"("id", "email");
