import { databaseAdapter } from "@/domain/helpers/databaseAdapter";
import type { IHistoryRepository } from "../history-repository";
import type { History } from "@/domain/history/History";

export class HistoryRepository implements IHistoryRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async create(employeeId: string, departmentId: string): Promise<void> {
		await this.repository.history.create({
			data: {
				employeeId,
				departmentId,
				changedAt: new Date(),
			},
		});
	}

	async list(employeeId: string) {
		return await this.repository.history.findMany({
			where: { employeeId },
			include: { department: true },
			orderBy: { changedAt: "desc" },
		});
	}
}
