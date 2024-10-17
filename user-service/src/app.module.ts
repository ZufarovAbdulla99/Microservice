import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1234",
      database: "user",
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
