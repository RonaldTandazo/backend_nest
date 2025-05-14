import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

export class FormDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  option: string;
}