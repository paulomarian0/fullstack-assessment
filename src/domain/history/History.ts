export class History {
	constructor(
		public id: string,
		public employeeId: string,
		public departmentId: string,
		public changedAt: Date,
	) {
		this.id = id;
		this.employeeId = employeeId;
		this.departmentId = departmentId;
		this.changedAt = changedAt;
	}
}
