import { Button } from "@/components/ui/button";
import { calculateDuration } from "@/utils/calculateDuration";
import dayjs from "dayjs";

interface IEmployeeCard {
	employeeName: string;
	department: string;
	hireDate: string;
}

export const EmployeeCard = ({
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
			<div className="flex items-center gap-4">
				<Button className="bg-green-600 hover:bg-green-400">
					View Details
				</Button>
				<Button className="text-red-600 bg-inherit hover:bg-red-100">X</Button>
			</div>
		</div>
	);
};
