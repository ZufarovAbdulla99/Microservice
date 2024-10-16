import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // // Swagger
  const config = new DocumentBuilder()
    .setTitle('Online Shop example')
    .setDescription('The Online Shop API description')
    .setVersion('1.0.0')
    .addTag('Online Shop')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
