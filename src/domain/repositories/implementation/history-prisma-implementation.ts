import { databaseAdapter } from "@/domain/helpers/databaseAdapter";
import type { IHistoryRepository } from "../history-repository";
import type { History } from "@/domain/history/History";

export class HistoryRepository implements IHistoryRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async create(user: History) {
		return this.repository.history.create({
			data: {
				email: user.email,
				name: user.name,
			},
		});
	}

	async list(email: string) {
		const users = await this.repository.history.findMany({
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
		const user = await this.repository.history.findFirst({
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
		return this.repository.history.update({
			where: {
				id,
			},
			data: {
				deletedAt: new Date(),
			},
		});
	}

	async update({ id, name }: { id: string; name: string }) {
		return this.repository.history.update({
			where: {
				id,
			},
			data: {
				name,
			},
		});
	}
}
