import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(user: UserDto): Promise<User> {
    const createdUser = this.usersRepository.create(user);
    const savedUser = this.usersRepository.save(createdUser);
    return savedUser;
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
