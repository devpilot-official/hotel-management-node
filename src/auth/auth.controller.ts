import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/data/user/user.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Get()
    getTasks() {
        return this.authService.getText('All is well');
    }

    @Post()
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        const user = await this.authService.addUser(createUserDTO);
        return res.status(201).json({
            message: 'User created successfully',
            user,
        });
    }
}
