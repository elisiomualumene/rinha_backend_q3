import { Injectable } from "@nestjs/common";
import { IPersonRepository } from "../../repositories/IPersonRepository";
import { ICreatePerson } from "../../dto/person.dto";
import { UseCase, badRequestResponse, successResponse } from "../../../../shared/contracts";
import { People } from "../../entities/person";

@Injectable()
export class CreatePeopleUseCase implements UseCase {
    constructor(private peopleRepository: IPersonRepository) { }

    async run(input: ICreatePerson) {
        try {
            const personAlreadyExists = this.peopleRepository.personByNickName(input.apelido)

            if (personAlreadyExists) {
                return badRequestResponse({ message: "Person already exists" })
            }

            const people = new People({ ...input });

            return successResponse(await this.peopleRepository.create(people))
        } catch (err) {
            return badRequestResponse(err);
        }
    }
}