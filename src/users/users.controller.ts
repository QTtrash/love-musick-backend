import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser, UserDto } from './user.interface';
import { DeleteResult } from 'typeorm';

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

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IUser> {
    const foundUser = await this.usersService.findOne(id);
    return foundUser;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    const deleteResult = await this.usersService.delete(id);
    return deleteResult;
  }
}
