import { getHistoryByEmployeeId } from "@/services/get-history";
import { use } from "react";
import dayjs from "dayjs";

interface IHistoryTable {
	id: string;
}

export const HistoryTable = ({ id }: IHistoryTable) => {
	const historyPromise = getHistoryByEmployeeId(id);
	const history = use(historyPromise);

	return (
		<table className="w-full mt-6 border-collapse border border-gray-300">
			<thead>
				<tr>
					<th className="border border-gray-300 p-2">Date</th>
					<th className="border border-gray-300 p-2">Department</th>
				</tr>
			</thead>
			<tbody>
				{history.map(({ id, department, changedAt }) => (
					<tr key={id}>
						<td className="border border-gray-300 p-2">
							{dayjs(changedAt).format("MMM D, YYYY HH:mm:ss")}
						</td>
						<td className="border border-gray-300 p-2">{department?.name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
