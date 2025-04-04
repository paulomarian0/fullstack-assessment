"use client";
import { Button } from "@/components/ui/button";
import { calculateDuration } from "@/utils/calculateDuration";
import dayjs from "dayjs";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { deleteEmployee } from "@/services/delete-employee";
interface IEmployeeCard {
	id: string;
	employeeName: string;
	department: string;
	hireDate: string;
}

export const EmployeeCard = ({
	id,
	employeeName,
	department,
	hireDate,
}: IEmployeeCard) => {
	const { years, months, days } = calculateDuration(hireDate);

	return (
		<div className="flex justify-between items-center p-4 border rounded-lg">
			<div className="flex items-center">
				<div className="w-24 h-24 bg-teal-300 rounded mr-4" />
				<div>
					<p className="font-semibold">
						{employeeName} ({department})
					</p>
					<p>
						Hire Date: {dayjs(hireDate).format("MMM D, YYYY")} ({years}y -{" "}
						{months}m - {days}d)
					</p>
				</div>
			</div>
			<form className="flex items-center gap-4">
				<Button className="bg-green-600 hover:bg-green-400">
					View Details
				</Button>
				<Dialog>
					<DialogTrigger asChild>
						<Button className="text-red-600 bg-inherit hover:bg-red-100">
							X
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogTitle>
							Are you sure you want to delete this employee?
						</DialogTitle>
						<DialogDescription>This action cannot be undone.</DialogDescription>
						<Button
							className="bg-red-600 hover:bg-red-400"
							onClick={() => deleteEmployee(id)}
						>
							Delete
						</Button>
					</DialogContent>
				</Dialog>
			</form>
		</div>
	);
};
