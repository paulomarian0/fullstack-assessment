interface History {
	id: string;
	employeeId: string;
	changedBy: string;
	changedAt: Date;
	department: {
		name: string;
	};
}

export async function getHistoryByEmployeeId(
	employeeId: string,
): Promise<History[]> {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/history/${employeeId}`,
	);
	const data = await res.json();
	return data;
}
