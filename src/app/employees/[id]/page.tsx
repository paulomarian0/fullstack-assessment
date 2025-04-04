import { Button } from "@/components/ui/button";
import { getEmployeeById } from "@/services/get-employee-by-id";
import { calculateDuration } from "@/utils/calculateDuration";
import { Label } from "@radix-ui/react-label";
import { use } from "react";
import dayjs from "dayjs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function EmployeePage({ params }: { params: { id: string } }) {
	const employeeId = params.id;
	const getEmployeeByIdPromise = getEmployeeById(employeeId);
	const employee = use(getEmployeeByIdPromise);

	const { years, months, days } = calculateDuration(employee.hireDate);

	return (
		<div className="p-6 max-w-4xl mx-auto">
			<h1 className="text-2xl font-bold mb-6">Employee Details</h1>

			<div className="flex flex-col md:flex-row items-start p-4">
				<div className="flex flex-col items-center border p-4">
					<div className="w-48 h-48 bg-cyan-200 mb-2" />
					<Button variant="destructive" className="w-full">
						Inactive
					</Button>
				</div>
				<div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0">
					<h1 className="text-xl font-bold">Employee Name</h1>
					<div className="mt-2">
						<p>
							<span className="font-bold">Employee ID: {employee.id}</span>
						</p>
						<p>
							<span className="font-bold">
								Department: {employee.department.name}
							</span>
						</p>
						<p>
							<span className="font-bold">Telephone: {employee.phone}</span>
						</p>
						<p>
							<span className="font-bold">Address: {employee.address}</span>
						</p>
					</div>
					<div className="mt-4">
						<Label htmlFor="department" className="font-bold">
							Update Department
						</Label>
						<div className="flex items-center mt-2">
							<Select name="departmentId" required>
								<SelectTrigger>
									<SelectValue placeholder="Select department" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="1">HR</SelectItem>
									<SelectItem value="2">Engineering</SelectItem>
									<SelectItem value="3">Marketing</SelectItem>
								</SelectContent>
							</Select>
							<Button variant="outline" className="ml-4">
								Update
							</Button>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-end ml-auto mt-4 md:mt-0">
					<p className="text-gray-500">Hire Date</p>
					<p>{dayjs(employee.hireDate).format("MMM D, YYYY")}</p>
					<p className="text-gray-500">
						({years}y - {months}m - {days}d)
					</p>
					<Button variant="destructive" className="w-full mt-2">
						Deactivate
					</Button>
				</div>
			</div>
		</div>
	);
}
