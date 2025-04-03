import type { IUserRepository } from "@/domain/repositories/employee-repository";
import type { User } from "../History";

export class ListUserUseCase {
	constructor(private readonly userRepository: IUserRepository) {}

	async execute(email: string): Promise<User[]> {
		return this.userRepository.list(email);
	}
}
