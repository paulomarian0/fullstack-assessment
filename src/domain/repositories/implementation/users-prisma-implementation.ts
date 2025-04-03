import type { IUserRepository } from "../employee-repository";
import type { User } from "@/domain/employees/Employee";
import { databaseAdapter } from "@/domain/helpers/databaseAdapter";

export class UsersRepository implements IUserRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async create(user: User) {
		return this.repository.user.create({
			data: {
				email: user.email,
				name: user.name,
			},
		});
	}

	async list(email: string) {
		const users = await this.repository.user.findMany({
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
		const user = await this.repository.user.findFirst({
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
		return this.repository.user.update({
			where: {
				id,
			},
			data: {
				deletedAt: new Date(),
			},
		});
	}

	async update({ id, name }: { id: string; name: string }) {
		return this.repository.user.update({
			where: {
				id,
			},
			data: {
				name,
			},
		});
	}
}
