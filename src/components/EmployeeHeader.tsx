import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { getDepartments } from "@/services/get-departments";
import { createEmployee } from "@/actions/create-employee";

interface IEmployeeFormData {
	firstName: string;
	lastName: string;
	hireDate: string;
	departmentId: string;
	phone: string;
	address: string;
	avatarUrl?: string;
}

export const EmployeeHeader = async () => {
	const departments = await getDepartments();

	const handleSubmit = async (formData: FormData) => {
		"use server";

		const employeeData: IEmployeeFormData = {
			firstName: formData.get("firstName") as string,
			lastName: formData.get("lastName") as string,
			hireDate: new Date(
				`${formData.get("hireDate")}T00:00:00Z`,
			).toISOString() as string,
			departmentId: formData.get("departmentId") as string,
			phone: formData.get("phone") as string,
			address: formData.get("address") as string,
		};

		await createEmployee(employeeData);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="flex justify-end py-4">
					<Button className="bg-green-600 hover:bg-green-400">
						New Employee
					</Button>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add New Employee</DialogTitle>
				</DialogHeader>
				<form action={handleSubmit} className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<Label>First Name</Label>
							<Input name="firstName" required />
						</div>
						<div>
							<Label>Last Name</Label>
							<Input name="lastName" required />
						</div>
					</div>

					<div>
						<Label>Hire Date</Label>
						<Input type="date" name="hireDate" required />
					</div>

					<div>
						<Label>Department</Label>
						<Select name="departmentId" required>
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
					</div>

					<div>
						<Label>Phone</Label>
						<Input name="phone" type="tel" />
					</div>

					<div>
						<Label>Address</Label>
						<Input name="address" />
					</div>

					<Button type="submit">Save</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};
