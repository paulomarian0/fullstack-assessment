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
import { getDepartments } from "@/services/get-departments";
import { getHistoryByEmployeeId } from "@/services/get-history";

export default function EmployeePage({ params }: { params: { id: string } }) {
	const employeeId = params.id;
	const getEmployeeByIdPromise = getEmployeeById(employeeId);
	const employee = use(getEmployeeByIdPromise);
	const departmentsPromise = getDepartments();
	const departments = use(departmentsPromise);
	const historyPromise = getHistoryByEmployeeId(employeeId);
	const history = use(historyPromise);

	const { years, months, days } = calculateDuration(employee.hireDate);

	const handleUpdateDepartment = async (formData: FormData) => {
		"use server";

		const departmentId = formData.get("departmentId") as string;

		const res = await fetch(
			`http://localhost:3000/api/employees/${employeeId}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					departmentId,
				}),
			},
		);

		if (!res.ok) {
			throw new Error("Failed to update department");
		}

		return await res.json();
	};

	const handleUpdateStatus = async () => {
		"use server";
		const res = await fetch(
			`http://localhost:3000/api/employees/${employeeId}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					status: !employee.status,
				}),
			},
		);

		if (!res.ok) {
			throw new Error("Failed to update status");
		}

		return await res.json();
	};

	console.log(history);

	return (
		<div className="p-6 max-w-4xl mx-auto">
			<h1 className="text-2xl font-bold mb-6">Employee Details</h1>

			<div className="flex flex-col md:flex-row items-start p-4">
				<div className="flex flex-col items-center border p-4">
					<div className="w-48 h-48 bg-cyan-200 mb-2" />
					{!employee.status && (
						<Button
							variant="default"
							className={"w-full text-white bg-red-500 hover:bg-red-400"}
						>
							Inactive
						</Button>
					)}
				</div>
				<div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0">
					<h1 className="text-xl font-bold">
						{`${employee?.firstName} ${employee?.lastName}`}
					</h1>
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
						<form
							action={handleUpdateDepartment}
							className="flex items-center mt-2"
						>
							<Select
								name="departmentId"
								required
								defaultValue={employee.department.id}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select department" />
								</SelectTrigger>
								<SelectContent>
									{departments.map(
										({ id, name }: { id: string; name: string }) => (
											<SelectItem key={id} value={id}>
												{name}
											</SelectItem>
										),
									)}
								</SelectContent>
							</Select>

							<Button
								variant="outline"
								className="ml-4 text-white bg-green-500 hover:bg-green-400"
							>
								Update
							</Button>
						</form>
					</div>
				</div>
				<div className="flex flex-col items-end ml-auto mt-4 md:mt-0">
					<p className="text-gray-500">Hire Date</p>
					<p>{dayjs(employee.hireDate).format("MMM D, YYYY")}</p>
					<p className="text-gray-500">
						({years}y - {months}m - {days}d)
					</p>
					<Button
						variant="default"
						className={`w-full ${!employee.status ? "bg-green-500 hover:bg-green-400" : "bg-red-500 hover:bg-red-400"}`}
						onClick={handleUpdateStatus}
						type="button"
					>
						{!employee.status ? "Activate" : "Inactivate"}
					</Button>
				</div>
			</div>
			<table className="w-full mt-6 border-collapse border border-gray-300">
				<thead>
					<tr>
						<th className="border border-gray-300 p-2">Date</th>
						<th className="border border-gray-300 p-2">Department</th>
					</tr>
				</thead>
				<tbody>
					{history.map(
						({
							id,
							departmentId,
							changedAt,
						}: { id: string; departmentId: string; changedAt: Date }) => (
							<tr key={id}>
								<td className="border border-gray-300 p-2">
									{dayjs(changedAt).format("MMM D, YYYY HH:mm:ss")}
								</td>
								<td className="border border-gray-300 p-2">
									{departments.find((dept) => dept.id === departmentId)?.name}
								</td>
							</tr>
						),
					)}
				</tbody>
			</table>
		</div>
	);
}
