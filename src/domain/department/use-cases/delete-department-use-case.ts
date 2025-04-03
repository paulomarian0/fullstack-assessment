import type { IDepartmentRepository } from "@/domain/repositories/department-repository";

export class DeleteDepartmentUseCase {
	constructor(private readonly departmentRepository: IDepartmentRepository) {}

	async execute({ id }: { id: string }) {
		const user = await this.departmentRepository.find({ id });

		if (!user) {
			throw new Error("User not found");
		}

		await this.departmentRepository.delete({ id });
	}
}
