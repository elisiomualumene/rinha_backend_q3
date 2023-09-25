import { randomUUID } from "crypto";

export interface IPerson {
    apelido: string;
    nome: string;
    nascimento: Date;
    stack?: string[];
    created_at?: Date;
}

export class People {
    private _id: string;
    private props: IPerson;

    constructor(props: IPerson, id?: string) {
        this._id = id ?? randomUUID()
        this.props = {
            ...props,
            created_at: props.created_at ?? new Date(),
        }
    }

    public get id(): string {
        return this._id;
    }

    public get apelido(): string {
        return this.props.apelido;
    }

    public get nome(): string {
        return this.props.nome
    }

    public set nome(nome: string) {
        this.props.nome = nome;
    }

    public get nascimento(): Date {
        return this.props.nascimento;
    }

    public set nascimento(nascimento: Date) {
        this.props.nascimento = nascimento;
    }

    public get stack(): string[] {
        return this.props.stack
    }

    public set stack(stack: string[]) {
        this.props.stack = stack;
    }

    public get created_at(): Date {
        return this.props.created_at;
    }
}