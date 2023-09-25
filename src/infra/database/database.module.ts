import { Module } from "@nestjs/common";
import { IPersonRepository } from "src/app/people/repositories/IPersonRepository";
import { PrismaService } from "./prisma/prisma.service";
import { PersonRepositoryImpl } from "./prisma/repositories/PersonRepositoryImpl";

@Module({
    providers: [
        PrismaService,
        {
            provide: IPersonRepository,
            useClass: PersonRepositoryImpl,
        }
    ],
    exports: [IPersonRepository]
})

export class databaseModule { }