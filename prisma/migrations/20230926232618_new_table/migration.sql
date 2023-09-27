-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "stack" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
