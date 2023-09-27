import { Injectable } from "@nestjs/common";
import { UseCase, badRequestResponse, successResponse } from "../../../../shared/contracts";
import { IPersonRepository } from "../../repositories/IPersonRepository";

@Injectable()
export class CountPeopleUseCase implements UseCase {
    constructor(private personRepository: IPersonRepository) { }

    async run() {
        const person = await this.personRepository.countPeople();
        return person
          ? successResponse(person)
          : badRequestResponse({ message: 'Erro Processando a requisição' });
    }
}