import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dtos/login.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'
import { ReturnLogin } from './dtos/returnLogin.dto';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private jwtService: JwtService) {}

    async login(loginDto: LoginDto): Promise<ReturnLogin> {
        const user: UserEntity | undefined = await this.userService
        .findUserByEmail(loginDto.email)
        .catch(() => undefined);

        const isMatch = await bcrypt.compare(loginDto?.password, user?.password || '');

        if (!user || !isMatch) {
            throw new NotFoundException('Email or password invalid');
        }

        return {
            accessToken: this.jwtService.sign({ ...new LoginPayload(user) }), // jwtService.sign - responsável por gerar o token JWT
            user: new ReturnUserDto(user)
        };
    }
}
