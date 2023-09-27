import { Person as RawPerson } from '@prisma/client';
import { Person } from '../../../../app/people/entities/person';

export class PrismaPersonMapper {
    static toPrisma(person: Person) {
        return {
            id: person.id,
            apelido: person.apelido,
            nome: person.nome,
            nascimento: person.nascimento,
            stack: person.stack,
            created_at: person.created_at,
        };
    }

    static toDomain(raw: RawPerson): Person {
        return new Person({ apelido: raw.apelido, nome: raw.nome, nascimento: raw.nascimento, stack: raw.stack });
    }
}