import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser, UserDto } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() user: UserDto): Promise<IUser> {
    const createdUser = await this.usersService.create(user);
    return createdUser;
  }

  @Get()
  async findAll(): Promise<IUser[]> {
    const foundUsers = await this.usersService.findAll();
    return foundUsers;
  }

  @Get()
  async findOne(@Param() id: string): Promise<IUser> {
    const foundUser = await this.usersService.findOne(id);
    return foundUser;
  }

  @Delete()
  async remove(@Param() id: string): Promise<string> {
    await this.usersService.remove(id);
    return 'success';
  }
}
