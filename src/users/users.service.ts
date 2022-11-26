import { Injectable } from '@nestjs/common';
import { User } from "./interfaces/User";

@Injectable()
export class UsersService {
    users: User[] = [
        {
            id : 1,
            first_name : "Prueba",
            last_name : "Uno",
            phone : "6646245789",
            username : "Prueba1",
            password : "a123",
            user_type : 1
        },
        {
            id : 2,
            first_name : "Prueba",
            last_name : "Dos",
            phone : "6646512478",
            username : "Prueba2",
            password : "b123",
            user_type : 0
        }
    ];

    getUsers(): User[] {
        return this.users;
    }

    getUser(user_id: number): User {
        return this.users.find(user => user.id === user_id);
    }
}
