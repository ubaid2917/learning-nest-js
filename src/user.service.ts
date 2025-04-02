import { Injectable } from "@nestjs/common";

 export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

@Injectable()
export class UserService {
    private store = new Map<number, User>();

    addUser(user: User) {
        this.store.set(user.id, user);
        return user;
    }

    getAllUsers() {
        return Array.from(this.store.values()); // ✅ Correct way to return all users
    }

    getUserById(id: number) {
        return this.store.get(id) || { message: "User not found" };
    }

    updateUser(id: number, user: User) {
        this.store.set(id, user)
    }

    deleteUser(id: number) {
        this.store.delete(id)
    }
}
