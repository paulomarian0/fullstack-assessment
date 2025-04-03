import type { IUserRepository } from "@/domain/repositories/employee-repository";

export class UpdateUserUseCase {
	constructor(private readonly userRepository: IUserRepository) {}

	async execute({ id, name }: { id: string; name: string }) {
		return this.userRepository.update({ id, name });
	}
}
