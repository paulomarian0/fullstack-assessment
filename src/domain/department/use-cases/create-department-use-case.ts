import type { DepartmentRepository } from "@/domain/repositories/implementation/department-prisma-implementation";
import type { Department } from "../Department";

export class CreateDepartmentUseCase {
	constructor(private readonly departmentRepository: DepartmentRepository) {}

	async execute(user: Department): Promise<Department> {
		return this.departmentRepository.create(user);
	}
}
