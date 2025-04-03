import { databaseAdapter } from "@/domain/helpers/databaseAdapter";
import type { IDepartmentRepository } from "../department-repository";
import type { Department } from "@/domain/department/Department";

export class DepartmentRepository implements IDepartmentRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async create(user: Department) {
		return this.repository.department.create({
			data: {
				email: user.email,
				name: user.name,
			},
		});
	}

	async list(email: string) {
		const users = await this.repository.department.findMany({
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
		const user = await this.repository.department.findFirst({
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
		return this.repository.department.update({
			where: {
				id,
			},
			data: {
				deletedAt: new Date(),
			},
		});
	}

	async update({ id, name }: { id: string; name: string }) {
		return this.repository.department.update({
			where: {
				id,
			},
			data: {
				name,
			},
		});
	}
}
