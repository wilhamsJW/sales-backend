import { Controller, Post, ValidationPipe, UsePipes, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ReturnLogin } from './dtos/returnLogin.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() loginDto): Promise<ReturnLogin> {
        return this.authService.login(loginDto)
    }
}
