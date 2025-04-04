import { Button } from "@/components/ui/button";
import { getEmployeeById } from "@/services/get-employee-by-id";
import { calculateDuration } from "@/utils/calculateDuration";
import { Label } from "@radix-ui/react-label";
import dayjs from "dayjs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { getDepartments } from "@/services/get-departments";
import { handleUpdateEmployee } from "@/actions/update-employee";
import { HistoryTable } from "@/components/HistoryTable";

export default async function EmployeePage({
	params,
}: { params: { id: string } }) {
	const employeeId = await params.id;
	const employee = await getEmployeeById(employeeId);
	const departments = await getDepartments();

	const { years, months, days } = calculateDuration(employee.hireDate);

	const handleUpdateDepartment = async (formData: FormData) => {
		"use server";
		const departmentId = formData.get("departmentId") as string;
		const updateData = { departmentId };

		return await handleUpdateEmployee(employeeId, updateData);
	};

	const handleUpdateStatus = async () => {
		"use server";

		const updateData = { status: !employee.status };

		return await handleUpdateEmployee(employeeId, updateData);
	};

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
			<HistoryTable id={employeeId} />
		</div>
	);
}
