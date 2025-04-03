import type { IEmployeeRepository } from "@/domain/repositories/employee-repository";

export class UpdateEmployeeUseCase {
	constructor(private readonly employeeRepository: IEmployeeRepository) {}

	async execute({
		id,
		phone,
		address,
		status,
	}: { id: string; phone: string; address: string; status: boolean }) {
		return this.employeeRepository.update({ id, phone, address, status });
	}
}
