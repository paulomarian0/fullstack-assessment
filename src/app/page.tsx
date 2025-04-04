import { EmployeeCard } from "@/components/EmployeeCard";
import { EmployeeHeader } from "@/components/EmployeeHeader";
import { Button } from "@/components/ui/button";
import { getEmployees } from "@/services/get-employees";
import { use } from "react";

interface IEmployee {
	id: string;
	firstName: string;
	lastName: string;
	hireDate: string;
	department: {
		name: string;
	};
}

export default function Home() {
	const employeesPromise = getEmployees();
	const employees = use(employeesPromise);

	console.log(employees);

	return (
		<div className="p-4">
			<EmployeeHeader />

			<div className="space-y-4">
				{employees.map((employee: IEmployee) => (
					<EmployeeCard
						id={employee.id}
						key={employee.id}
						department={employee?.department?.name}
						employeeName={`${employee.firstName} ${employee.lastName}`}
						hireDate={employee.hireDate}
					/>
				))}
			</div>
		</div>
	);
}
