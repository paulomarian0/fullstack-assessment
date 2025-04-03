import type { IDepartmentRepository } from "@/domain/repositories/department-repository";

export class UpdateDepartmentUseCase {
	constructor(private readonly departmentRepository: IDepartmentRepository) {}

	async execute({ id, name }: { id: string; name: string }) {
		return this.departmentRepository.update({ id, name });
	}
}
