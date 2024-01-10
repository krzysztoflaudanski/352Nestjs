import { Transform } from 'class-transformer';
import {
    IsNotEmpty,
    IsString,
    Length,
    IsUUID
} from 'class-validator';

export class UpdateOrderDTO {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    productId: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 25)
    client: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
    address: string;
}