import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { ICreatePerson } from "../../../app/people/dto/person.dto";
import { CountPeopleUseCase } from "../../../app/people/useCases/countPeople/countPeopleUseCase";
import { CreatePeopleUseCase } from "../../../app/people/useCases/createPerson/createPersonUseCase";
import { GetPersonByIdUseCase } from "../../../app/people/useCases/personById/getPersonByIdUseCase";

@Controller('person')
export class PersonController {
    constructor(
        private createPerson: CreatePeopleUseCase, 
        private getPersonById: GetPersonByIdUseCase, 
        private countPeople: CountPeopleUseCase) { }

    @Post()
    async CreatePerson(@Body() data: ICreatePerson, @Res() res: Response){
        const person = await this.createPerson.run(data);
        return res.status(201).json(person);
    }

    @Get(":id")
    async GetPersonById(@Param("id") id: string, @Res() res: Response){
        const person = await this.getPersonById.run(id);
        return res.status(200).json(person);
    }

    @Get("counter")
    async CounterPeople(@Res() res: Response){
        const counter = await this.countPeople.run();
        res.status(200).json(counter);
    }
}