import { Module } from "@nestjs/common"
import { InitialRoute } from "./controllers"
import { databaseModule } from "../database/database.module"
import { PersonController } from "./controllers/person.controller"
import { CountPeopleUseCase, CreatePeopleUseCase, GetPersonByIdUseCase, SearchByTermUseCase } from "../../app/people/useCases"

@Module({
    imports: [databaseModule],
    providers: [
        CreatePeopleUseCase,
        GetPersonByIdUseCase, 
        CountPeopleUseCase,
        SearchByTermUseCase,
    ],
    controllers: [InitialRoute, PersonController]
})

export class httpModule { }