import { Body, Controller, Get, Param, Post, Res, Query } from "@nestjs/common";
import { Response } from "express";
import { ICreatePerson } from "../../../app/people/dto/person.dto";
import { CountPeopleUseCase } from "../../../app/people/useCases/countPeople/countPeopleUseCase";
import { CreatePeopleUseCase } from "../../../app/people/useCases/createPerson/createPersonUseCase";
import { GetPersonByIdUseCase } from "../../../app/people/useCases/personById/getPersonByIdUseCase";
import { SearchByTermUseCase } from "../../../app/people/useCases";

@Controller('person')
export class PersonController {
    constructor(
        private createPerson: CreatePeopleUseCase, 
        private getPersonById: GetPersonByIdUseCase, 
        private countPeople: CountPeopleUseCase,
        private searchByTerm: SearchByTermUseCase,
        ) { }

    @Post()
    async CreatePerson(@Body() data: ICreatePerson, @Res() res: Response){
        const person = await this.createPerson.run(data);
        return res.status(person.status).json(person);
    }

    @Get(":id")
    async GetPersonById(@Param("id") id: string, @Res() res: Response){
        const person = await this.getPersonById.run(id);
        return res.status(person.status).json(person);
    }

    @Get()
    async SearchPeopleByTerm(@Query() t: string, @Res() res: Response){
        const people = await this.searchByTerm.run(t);
        return res.status(people.status).json(people);
    }

    @Get("counter")
    async CounterPeople(@Res() res: Response){
        const counter = await this.countPeople.run();
        res.status(counter.status).json(counter);
    }
}