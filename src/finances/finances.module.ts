import { Module } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { FinancesController } from './finances.controller';
import { JwtStrategy } from 'src/authentication/jwt.strategy';

@Module({
  controllers: [FinancesController],
  providers: [FinancesService, JwtStrategy],
})
export class FinancesModule {}
