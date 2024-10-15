import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from '@modules';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1234",
      database: "microservice",
      models: [Category],
      autoLoadModels: true,
      synchronize: true,
    }),
    CategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
