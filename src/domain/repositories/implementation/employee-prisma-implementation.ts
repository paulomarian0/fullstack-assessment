import type { Employee } from "@/domain/employees/Employee";
import { databaseAdapter } from "@/domain/helpers/databaseAdapter";
import type { IEmployeeRepository } from "../employee-repository";

export class EmployeeRepository implements IEmployeeRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async create({
		firstName,
		lastName,
		hireDate,
		phone,
		address,
		status,
		departmentId,
	}: Employee) {
		return this.repository.employee.create({
			data: {
				firstName,
				lastName,
				hireDate,
				phone,
				address,
				status,
				departmentId,
			},
		});
	}

	async list() {
		const departments = await this.repository.employee.findMany({});

		return departments;
	}

	async find({ id }: { id?: string }) {
		const user = await this.repository.employee.findFirst({
			where: {
				id,
			},
		});

		return user;
	}

	async delete({ id }: { id: string }) {
		await this.repository.employee.delete({
			where: {
				id,
			},
		});
	}

	async update({
		id,
		phone,
		address,
		status,
	}: { id: string; phone: string; address: string; status: boolean }) {
		await this.repository.employee.update({
			where: {
				id,
			},
			data: {
				phone,
				address,
				status,
			},
		});
	}
}
