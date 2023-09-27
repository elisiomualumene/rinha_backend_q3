import { Injectable } from "@nestjs/common";
import { IPersonRepository } from "../../repositories/IPersonRepository";
import { ICreatePerson } from "../../dto/person.dto";
import { UseCase, badRequestResponse, successResponse } from "../../../../shared/contracts";
import { Person } from "../../entities/person";

@Injectable()
export class CreatePeopleUseCase implements UseCase {
    constructor(private peopleRepository: IPersonRepository) { }

    async run({ apelido, nascimento, nome, stack }: ICreatePerson) {
        try {
            const personAlreadyExists = await this.peopleRepository.personByNickName(apelido)

            if (personAlreadyExists) {
                return badRequestResponse({ message: "Person already exists" })
            }

            const person = new Person({ apelido, nascimento, nome, stack });

            return successResponse(await this.peopleRepository.create(person))
        } catch (err) {
            return badRequestResponse(err);
        }
    }
}