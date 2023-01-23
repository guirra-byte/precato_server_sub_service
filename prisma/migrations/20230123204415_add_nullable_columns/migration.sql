-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_subs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "block" TEXT NOT NULL,
    "history" TEXT,
    "previous_history" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "last_message" TEXT
);
INSERT INTO "new_subs" ("active", "block", "created_at", "email", "history", "id", "last_message", "name", "previous_history") SELECT "active", "block", "created_at", "email", "history", "id", "last_message", "name", "previous_history" FROM "subs";
DROP TABLE "subs";
ALTER TABLE "new_subs" RENAME TO "subs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
