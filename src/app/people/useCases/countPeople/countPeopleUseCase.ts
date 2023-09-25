import { Injectable } from "@nestjs/common";
import { UseCase, badRequestResponse, successResponse } from "src/shared/contracts";
import { IPersonRepository } from "../../repositories/IPersonRepository";

@Injectable()
export class CountPeopleUseCase implements UseCase {
    constructor(private personRepository: IPersonRepository) { }

    async run() {
        try {
            return successResponse(await this.personRepository.countPeople())
        } catch (err) {
            return badRequestResponse(err);
        }
    }
}