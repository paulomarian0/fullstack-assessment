import type { Department } from "../Department";
import type { IDepartmentRepository } from "@/domain/repositories/department-repository";

export class ListDepartmentUseCase {
	constructor(private readonly departmentRepository: IDepartmentRepository) {}

	async execute(email: string): Promise<Department[]> {
		return this.departmentRepository.list(email);
	}
}
