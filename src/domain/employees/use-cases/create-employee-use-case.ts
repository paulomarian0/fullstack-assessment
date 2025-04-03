import type { UsersRepository } from "@/domain/repositories/implementation/history-prisma-implementation";
import type { User } from "../Employee";

export class CreateUserUseCase {
	constructor(private readonly userRepository: UsersRepository) {}

	async execute(user: User): Promise<User> {
		return this.userRepository.create(user);
	}
}
