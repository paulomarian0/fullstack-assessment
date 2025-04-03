export interface IDepartmentRepository {
	create(name: string): Promise<void>;
	list(): Promise<string[]>;
	find(id: string): Promise<string | null>;
	delete(id: string): Promise<void>;
	update(id: string, name: string): Promise<void>;
}
