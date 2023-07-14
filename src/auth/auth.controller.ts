import { Controller, Post, ValidationPipe, UsePipes, Body } from '@nestjs/common';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() loginDto): Promise<ReturnUserDto> {
        return new ReturnUserDto(await this.authService.login(loginDto))
    }
}
