import type { IHistoryRepository } from "@/domain/repositories/history-repository";

export class ListHistoryUseCase {
	constructor(private readonly historyRepository: IHistoryRepository) {}

	async execute({ employeeId }: { employeeId: string }) {
		return this.historyRepository.list(employeeId);
	}
}
