import type { IEmployeeRepository } from "@/domain/repositories/employee-repository";

export class DeleteEmployeeUseCase {
	constructor(private readonly employeeRepository: IEmployeeRepository) {}

	async execute({ id }: { id: string }) {
		const user = await this.employeeRepository.find({ id });

		if (!user) {
			throw new Error("Employee not found");
		}

		await this.employeeRepository.delete({ id });
	}
}
