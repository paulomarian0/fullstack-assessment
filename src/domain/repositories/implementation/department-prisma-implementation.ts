import { databaseAdapter } from "@/domain/helpers/databaseAdapter";
import type { IDepartmentRepository } from "../department-repository";
import type { Department } from "@/domain/department/Department";

export class DepartmentRepository implements IDepartmentRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async create(name: string) {
		return this.repository.department.create({
			data: {
				name,
			},
		});
	}

	async list() {
		return await this.repository.department.findMany({});
	}

	async find({ id, name }: { id?: string; name?: string }) {
		return await this.repository.department.findFirst({
			where: {
				id,
				name,
			},
		});
	}

	async delete({ id }: { id: string }) {
		await this.repository.department.delete({
			where: { id },
		});
	}

	async update({ id, name }: { id: string; name: string }) {
		await this.repository.department.update({
			where: {
				id,
			},
			data: {
				name,
			},
		});
	}
}
