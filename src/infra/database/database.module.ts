import { Module } from "@nestjs/common";
import { IPersonRepository } from "../../app/people/repositories/IPersonRepository";;
import { PersonRepositoryImpl } from "./prisma/repositories/PersonRepositoryImpl";
import { PrismaService } from "./prisma/prisma.service";


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