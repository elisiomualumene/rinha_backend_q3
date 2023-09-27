import { Person } from "../entities/person";

export abstract class IPersonRepository {
    abstract create(people: Person): Promise<Person>;
    abstract personById(id: string): Promise<Person>;
    abstract personByNickName(nickname: string): Promise<Person>;
    abstract search(term: string): Promise<Person[]>
    abstract countPeople(): Promise<any>;
}