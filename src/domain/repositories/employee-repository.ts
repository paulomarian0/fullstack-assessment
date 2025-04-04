import type { Employee } from "../employees/Employee";

export interface IEmployeeRepository {
	create(employee: {
		firstName: string;
		lastName: string;
		hireDate: Date;
		phone: string;
		address: string;
		status: boolean;
		departmentId: string;
	}): Promise<{
		firstName: string;
		lastName: string;
		hireDate: Date;
		phone: string;
		address: string;
		status: boolean;
		departmentId: string;
	}>;
	list(): Promise<Employee[]>;
	find({ id }: { id?: string }): Promise<Employee | null>;
	delete({ id }: { id: string }): Promise<void>;
	update({
		id,
		departmentId,
		status,
	}: {
		id: string;
		departmentId?: string;
		status?: boolean;
	}): Promise<void>;
}
