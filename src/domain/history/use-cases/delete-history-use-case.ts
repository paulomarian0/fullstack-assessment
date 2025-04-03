import type { IUserRepository } from "@/domain/repositories/employee-repository";

export class DeleteUserUseCase {
	constructor(private readonly userRepository: IUserRepository) {}

	async execute({ id }: { id: string }) {
		console.log(id);
		const user = await this.userRepository.find({ id });

		if (!user) {
			throw new Error("User not found");
		}

		await this.userRepository.delete({ id });
	}
}
