import { Module } from "@nestjs/common"
import { InitialRoute } from "./controllers"
import { databaseModule } from "../database/database.module"
import { PersonController } from "./controllers/personController"
import { CountPeopleUseCase, CreatePeopleUseCase, GetPersonByIdUseCase } from "../../app/people/useCases"

@Module({
    imports: [databaseModule],
    providers: [CreatePeopleUseCase, GetPersonByIdUseCase, CountPeopleUseCase],
    controllers: [InitialRoute, PersonController]
})

export class httpModule { }