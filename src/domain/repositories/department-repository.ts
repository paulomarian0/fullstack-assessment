import type { Department } from "../department/Department";

export interface IDepartmentRepository {
	create(name: string): Promise<Department>;
	list(): Promise<Department[]>;
	find({
		id,
		name,
	}: { id?: string; name?: string }): Promise<Department | null>;
	delete({ id }: { id: string }): Promise<void>;
	update({ id, name }: { id: string; name: string }): Promise<void>;
}
