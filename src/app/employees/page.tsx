import { EmployeeCard } from "@/components/EmployeeCard";
import { EmployeeHeader } from "@/components/EmployeeHeader";
import { getEmployees } from "@/services/get-employees";

export default async function Home() {
	const employees = await getEmployees();

	return (
		<div className="p-4">
			<EmployeeHeader />

			<div className="space-y-4">
				{employees?.map(({ id, department, firstName, lastName, hireDate }) => (
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
