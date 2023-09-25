import { Controller } from "@nestjs/common";
import { CountPeopleUseCase } from "src/app/people/useCases/countPeople/countPeopleUseCase";
import { CreatePeopleUseCase } from "src/app/people/useCases/createPerson/createPersonUseCase";
import { GetPersonByIdUseCase } from "src/app/people/useCases/personById/getPersonByIdUseCase";
import { PrismaService } from "src/infra/database/prisma/prisma.service";

@Controller('person')
export class PersonController {
    constructor(private createPerson: CreatePeopleUseCase, private getPersonById: GetPersonByIdUseCase, countPeople: CountPeopleUseCase) { }

    
}