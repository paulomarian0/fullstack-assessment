import type { User } from "../employees/Employee";

export interface IUserRepository {
	create(user: User): Promise<User>;
	list(email: string): Promise<User[]>;
	find({
		id,
		name,
		email,
	}: { id?: string; email?: string; name?: string }): Promise<User | null>;
	delete({ id }: { id: string }): Promise<User>;
	update({ id, name }: { id: string; name: string }): Promise<User>;
}
