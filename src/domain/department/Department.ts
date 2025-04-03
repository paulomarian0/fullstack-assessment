export class Employee {
	constructor(
		public readonly id: string,
		public readonly firstName: string,
		public readonly lastName: string,
		public readonly hireDate: Date,
		public readonly phone: string,
		public readonly address: string,
		public readonly status: boolean,
		public readonly departmentId: string,
	) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.hireDate = hireDate;
		this.phone = phone;
		this.address = address;
		this.status = status;
		this.departmentId = departmentId;
	}
}
