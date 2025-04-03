import type { IDepartmentRepository } from "@/domain/repositories/department-repository";

export class FindDepartmentUseCase {
	constructor(private readonly departmentRepository: IDepartmentRepository) {}

	async execute({ id, name }: { id?: string; name?: string }) {
		return this.departmentRepository.find({ id, name });
	}
}
