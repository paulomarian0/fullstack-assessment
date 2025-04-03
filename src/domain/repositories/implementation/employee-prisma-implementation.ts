import type { Employee } from "@/domain/employees/Employee";
import { databaseAdapter } from "@/domain/helpers/databaseAdapter";
import type { IEmployeeRepository } from "../employee-repository";

export class EmployeeRepository implements IEmployeeRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async create(user: Employee) {
		return this.repository.employee.create({
			data: {
				email: user.email,
				name: user.name,
			},
		});
	}

	async list(email: string) {
		const users = await this.repository.employee.findMany({
			where: {
				email: email ? { contains: email } : undefined,
				deletedAt: null,
			},
		});

		return users;
	}

	async find({
		id,
		name,
		email,
	}: { id?: string; name?: string; email?: string }) {
		const user = await this.repository.employee.findFirst({
			where: {
				id,
				name,
				email,
				deletedAt: null,
			},
		});

		return user;
	}

	async delete({ id }: { id: string }) {
		return this.repository.employee.update({
			where: {
				id,
			},
			data: {
				deletedAt: new Date(),
			},
		});
	}

	async update({ id, name }: { id: string; name: string }) {
		return this.repository.employee.update({
			where: {
				id,
			},
			data: {
				name,
			},
		});
	}
}
