import type { IDepartmentRepository } from "@/domain/repositories/department-repository";

export class DeleteDepartmentUseCase {
	constructor(private readonly departmentRepository: IDepartmentRepository) {}

	async execute({ id }: { id: string }) {
		const department = await this.departmentRepository.find({ id });

		if (!department) {
			throw new Error("Department not found");
		}

		await this.departmentRepository.delete({ id });
	}
}
