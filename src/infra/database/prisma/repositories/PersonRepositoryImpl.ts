import { Injectable } from "@nestjs/common";
import { Person } from "../../../../app/people/entities/person";
import { IPersonRepository } from "../../../../app/people/repositories/IPersonRepository";
import { PrismaService } from "../prisma.service";
import { PrismaPersonMapper } from "../mappers";

@Injectable()
export class PersonRepositoryImpl implements IPersonRepository {
    constructor(private prisma: PrismaService) { }

    async create(person: Person): Promise<Person> {
        const raw = PrismaPersonMapper.toPrisma(person);
        const index = await this.prisma.person.create({
            data: raw
        })
        return PrismaPersonMapper.toDomain(index);
    }
    async personById(id: string): Promise<Person> {
        const person = await this.prisma.person.findUnique({
            where: { id },
        });

        if (!person) {
            console.log("aqui")
            return null;
        }

        return PrismaPersonMapper.toDomain(person);
    }
    async personByNickName(nickname: string): Promise<Person> {
        const person = await this.prisma.person.findFirst({
            where: { apelido: nickname },
        });

        if (!person) {
            return null;
        }

        return PrismaPersonMapper.toDomain(person);
    }
    async search(term: string): Promise<Person[]> {
        const person = await this.prisma.person.findMany({
            where: {
                OR: [
                    {
                        apelido: {
                            contains: term,
                        },
                    },
                    {
                        nome: {
                            contains: term,
                        },
                    },
                    {
                        nascimento: {
                            contains: term
                        }
                    },
                    {
                        stack: {
                            has: term
                        }
                    }
                ],
            },
        });

        return person.map((person) => PrismaPersonMapper.toDomain(person));
    }
    async countPeople(): Promise<number> {
        const counter = await this.prisma.person.count();
        return counter;
    }

}