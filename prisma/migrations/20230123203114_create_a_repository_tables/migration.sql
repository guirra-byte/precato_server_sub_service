-- CreateTable
CREATE TABLE "subs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "block" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "previous_history" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "last_message" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "position" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "message_subs" (
    "sub_id" TEXT NOT NULL,
    "msg_id" TEXT NOT NULL,

    PRIMARY KEY ("sub_id", "msg_id"),
    CONSTRAINT "message_subs_sub_id_fkey" FOREIGN KEY ("sub_id") REFERENCES "subs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "message_subs_msg_id_fkey" FOREIGN KEY ("msg_id") REFERENCES "messages" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
