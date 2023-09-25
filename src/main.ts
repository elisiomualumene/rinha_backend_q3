import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './shared/filters/validations.filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const httpAdapter = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))


  await app.listen(3000);
}
bootstrap();
