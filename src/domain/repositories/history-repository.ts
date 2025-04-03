import type { History } from "../history/History";

export interface IHistoryRepository {
	create(
		employeeId: string,
		departmentId: string,
		changedAt: Date,
	): Promise<void>;
	list(): Promise<History[]>;
	find(id: string): Promise<History | null>;
	delete(id: string): Promise<void>;
	update(id: string, employeeId: string, departmentId: string): Promise<void>;
}
