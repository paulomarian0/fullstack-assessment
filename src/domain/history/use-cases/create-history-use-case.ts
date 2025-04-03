import type { IHistoryRepository } from "@/domain/repositories/history-repository";
import type { History } from "../History";

export class CreateHistoryUseCase {
	constructor(private readonly historyRepository: IHistoryRepository) {}

	async execute({
		employeeId,
		departmentId,
	}: { employeeId: string; departmentId: string }) {
		return this.historyRepository.create(employeeId, departmentId);
	}
}
