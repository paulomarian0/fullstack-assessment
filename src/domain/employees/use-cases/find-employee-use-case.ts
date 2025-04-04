import type { IEmployeeRepository } from "@/domain/repositories/employee-repository";

export class FindEmployeeUseCase {
	constructor(private readonly employeeRepository: IEmployeeRepository) {}

	async execute({ id }: { id?: string }) {
		console.log(id);
		return this.employeeRepository.find({ id });
	}
}
