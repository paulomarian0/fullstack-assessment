import type { IDepartmentRepository } from "@/domain/repositories/department-repository";

export class FindDepartmentUseCase {
	constructor(private readonly departmentRepository: IDepartmentRepository) {}

	async execute({
		id,
		name,
		email,
	}: { id?: string; name?: string; email?: string }) {
		return this.departmentRepository.find({ id, name, email });
	}
}
