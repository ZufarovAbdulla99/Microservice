import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '@modules';
// import { Product } from './modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'product',
      entities: [Product],
      synchronize: true,
      autoLoadEntities: true
    }),
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
