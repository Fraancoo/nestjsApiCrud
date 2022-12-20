import { Injectable, NotFoundException } from '@nestjs/common';
import { createUser, editUser } from './dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async getUsers() {
        return await this.userRepository.find();
    }

    async getUser(id: number) {
        const user = await this.userRepository.findOne({where: {id}});
        if (!user) throw new NotFoundException();
        
        return user;
    }
    
    async postUser(dto: createUser) {
        const user = this.userRepository.create(dto);
        return await this.userRepository.save(user);
    }
    
    async putUser(id: number, dto: editUser) {
        const user = await this.userRepository.findOne({where: {id}});
        if (!user) throw new NotFoundException();

        const editedUser = Object.assign(user, dto);
        return await this.userRepository.save(editedUser);
    }
    
    async deleteUser(id: number) {
        const user = await this.userRepository.findOne({where: {id}});
        if (!user) throw new NotFoundException();

        return await this.userRepository.delete(id);
    }
}
