import type { IUserRepository } from "@/domain/repositories/employee-repository";

export class FindUserUseCase {
	constructor(private readonly userRepository: IUserRepository) {}

	async execute({
		id,
		name,
		email,
	}: { id?: string; name?: string; email?: string }) {
		return this.userRepository.find({ id, name, email });
	}
}
