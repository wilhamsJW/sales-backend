import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dtos/login.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService) {}

    async login(loginDto: LoginDto): Promise<UserEntity> {
        const user: UserEntity | undefined = await this.userService
        .findUserByEmail(loginDto.email)
        .catch(() => undefined);

        const isMatch = await bcrypt.compare(loginDto?.password, user?.password || '');

        if (!user || !isMatch) {
            throw new NotFoundException('Email or password invalid');
        }

        return user;
    }
}
