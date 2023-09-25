import { Injectable } from "@nestjs/common";
import { UseCase, badRequestResponse, successResponse } from "src/shared/contracts";
import { IPersonRepository } from "../../repositories/IPersonRepository";

@Injectable()
export class GetPersonByIdUseCase implements UseCase {
    constructor(private personRepository: IPersonRepository) { }

    async run(id: string) {
        try {
            return successResponse(await this.personRepository.personById(id));
        } catch (err) {
            return badRequestResponse(err);
        }
    }
}