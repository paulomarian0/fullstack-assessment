import type { Department } from "../Department";
import type { IDepartmentRepository } from "@/domain/repositories/department-repository";

export class ListDepartmentUseCase {
	constructor(private readonly departmentRepository: IDepartmentRepository) {}

	async execute(): Promise<Department[]> {
		return this.departmentRepository.list();
	}
}
