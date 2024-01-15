import { IsString } from "class-validator";

export class CreateCarDto {
  @IsString()
  readonly brand: string | undefined;

  @IsString()
  readonly model: string | undefined;
}
