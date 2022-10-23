import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateFinanceDto {
  @IsNotEmpty()
  @IsString()
  nome_banco: string;

  @IsNotEmpty()
  @IsString()
  tipo_conta: string;

  @IsNotEmpty()
  @IsString()
  nome_titular: string;

  @IsNotEmpty()
  @IsNumber()
  limite_cartao: number;
}
