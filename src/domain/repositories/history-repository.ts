export interface IHistoryRepository {
	create(employeeId: string, departmentId: string): Promise<void>;
}
