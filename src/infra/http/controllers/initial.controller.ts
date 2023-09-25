import { Controller, Get } from '@nestjs/common';
import { IInitialRouterProps } from 'src/shared/@types/initial';

@Controller()
export class InitialRoute {

  @Get()
  InitialRoute(): IInitialRouterProps {
    return {
      status: true,
      system_name: "Rinha de Backend - Q3",
    }
}
}
