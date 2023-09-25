import { Injectable } from "@nestjs/common";
import { People } from "src/app/people/entities/person";
import { IPersonRepository } from "src/app/people/repositories/IPersonRepository";

@Injectable()
export class PersonRepositoryImpl implements IPersonRepository {
    create(people: People): Promise<void> {
        throw new Error("Method not implemented.");
    }
    personById(id: string): Promise<People> {
        throw new Error("Method not implemented.");
    }
    personByNickName(nickname: string): Promise<People> {
        throw new Error("Method not implemented.");
    }
    search(term: string): Promise<People> {
        throw new Error("Method not implemented.");
    }
    countPeople(): Promise<any> {
        throw new Error("Method not implemented.");
    }

}