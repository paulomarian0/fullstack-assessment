import { EmployeeCard } from "@/components/EmployeeCard";
import { EmployeeHeader } from "@/components/EmployeeHeader";
import { getEmployees } from "@/services/get-employees";
import { use } from "react";

export default function Home() {
	const employeesPromise = getEmployees();
	const employees = use(employeesPromise);

	return (
		<div className="p-4">
			<EmployeeHeader />

			<div className="space-y-4">
				{employees.map(({ id, department, firstName, lastName, hireDate }) => (
					<EmployeeCard
						id={id}
						key={id}
						department={department?.name}
						employeeName={`${firstName} ${lastName}`}
						hireDate={hireDate}
					/>
				))}
			</div>
		</div>
	);
}
