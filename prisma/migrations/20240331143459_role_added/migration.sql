-- CreateEnum
CREATE TYPE "roles" AS ENUM ('admin', 'superadmin', 'user', 'receptionist');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "roles" NOT NULL DEFAULT 'user';
