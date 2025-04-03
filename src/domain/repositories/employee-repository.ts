import type { Employee } from "../employees/Employee";

export interface IEmployeeRepository {
	create(employee: Employee): Promise<Employee>;
	list(email: string): Promise<Employee[]>;
	find({
		id,
		name,
		email,
	}: { id?: string; email?: string; name?: string }): Promise<Employee | null>;
	delete({ id }: { id: string }): Promise<Employee>;
	update({ id, name }: { id: string; name: string }): Promise<Employee>;
}
