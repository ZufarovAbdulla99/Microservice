import { CategoryModule } from '@modules';
import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product';

@Module({
  imports: [CategoryModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
