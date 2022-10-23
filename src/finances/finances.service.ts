import { Injectable } from '@nestjs/common';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { Finance } from './entities/finance.entity';

const financialMoves: Array<Finance> = [];

@Injectable()
export class FinancesService {
  create(createFinanceDto: CreateFinanceDto) {
    return financialMoves.push({
      id: financialMoves[financialMoves.length - 1]?.id + 1 || 1,
      ...createFinanceDto,
    });
  }

  findAll() {
    return financialMoves;
  }

  findOne(id: number) {
    return financialMoves.filter((finacialMove) => finacialMove.id === id)[0];
  }
}
