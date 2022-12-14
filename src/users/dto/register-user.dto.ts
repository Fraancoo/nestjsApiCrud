import { IsOptional, IsString, Length, IsInt, Min, Max } from "class-validator";

export class createUser {
    @IsString()
    @Length(1, 50)
    first_name: string;
    
    @IsString()
    @Length(1, 50)
    last_name: string;
    
    @IsString()
    @Length(1, 10)
    phone: string;
    
    @IsString()
    @Length(1, 50)
    username: string;
    
    @IsString()
    @Length(1, 30)
    password: string;
    
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(3)
    user_type?: number;
}
