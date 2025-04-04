import type { IEmployeeRepository } from "@/domain/repositories/employee-repository";
import type { IHistoryRepository } from "@/domain/repositories/history-repository";

export class UpdateEmployeeUseCase {
	constructor(
		private readonly employeeRepository: IEmployeeRepository,
		private readonly historyRepository: IHistoryRepository,
	) {}

	async execute({
		id,
		departmentId,
		status,
	}: { id: string; departmentId: string; status: boolean }) {
		const employee = await this.employeeRepository.find({ id });
		if (!employee) throw new Error("Employee not found");

		const updateData: { id: string; departmentId?: string; status?: boolean } =
			{ id };

		if (
			departmentId &&
			employee.departmentId &&
			employee.departmentId !== departmentId
		) {
			await this.historyRepository.create(employee.id, departmentId);
			updateData.departmentId = departmentId;
		}

		if (employee.status !== status) {
			updateData.status = status;
		}

		return this.employeeRepository.update(updateData);
	}
}
