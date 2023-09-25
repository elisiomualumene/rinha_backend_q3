import { Module } from "@nestjs/common"
import { InitialRoute } from "./controllers"

@Module({
    imports: [],
    providers: [],
    controllers: [InitialRoute]
})

export class httpModule { }