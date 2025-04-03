import type { IEmployeeRepository } from "@/domain/repositories/employee-repository";
import type { Employee } from "../Employee";

export class CreateEmployeeUseCase {
	constructor(private readonly employeeRepository: IEmployeeRepository) {}

	async execute(employee: {
		firstName: string;
		lastName: string;
		hireDate: Date;
		phone: string;
		address: string;
		status: boolean;
		departmentId: string;
	}): Promise<{
		firstName: string;
		lastName: string;
		hireDate: Date;
		phone: string;
		address: string;
		status: boolean;
		departmentId: string;
	}> {
		return this.employeeRepository.create(employee);
	}
}
