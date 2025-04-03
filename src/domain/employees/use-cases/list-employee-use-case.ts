import type { IEmployeeRepository } from "@/domain/repositories/employee-repository";
import type { Employee } from "../Employee";

export class ListEmployeeUseCase {
	constructor(private readonly employeeRepository: IEmployeeRepository) {}

	async execute(): Promise<Employee[]> {
		return this.employeeRepository.list();
	}
}
