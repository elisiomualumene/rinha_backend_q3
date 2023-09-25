import { People } from "../entities/person";

export abstract class IPersonRepository {
    abstract create(people: People): Promise<void>;
    abstract personById(id: string): Promise<People | null>;
    abstract personByNickName(nickname: string): Promise<People | null>;
    abstract search(term: string): Promise<People | null>
    abstract countPeople(): Promise<any>;
}