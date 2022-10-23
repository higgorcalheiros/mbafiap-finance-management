import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinancesModule } from './finances/finances.module';

@Module({
  imports: [FinancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
