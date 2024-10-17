import { CategoryModule, ChatModule } from '@modules';
import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product';

@Module({
  imports: [CategoryModule, ProductModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
