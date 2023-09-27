import { Injectable } from "@nestjs/common";
import { UseCase, badRequestResponse, successResponse } from "../../../../shared/contracts";
import { IPersonRepository } from "../../repositories/IPersonRepository";

@Injectable()
export class SearchByTermUseCase implements UseCase {
    constructor(private personRepository: IPersonRepository){}

    async run(t: string){
        try {
            return successResponse(await this.personRepository.search(t))
        }catch(err){
            return badRequestResponse(err);
        }
    }
}