export interface IHistoryRepository {
	create(employeeId: string, departmentId: string): Promise<void>;
	list(employeeId: string): Promise<
		{
			departmentId: string;
			id: string;
			employeeId: string;
			changedAt: Date;
		}[]
	>;
}
