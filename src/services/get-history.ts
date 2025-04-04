export async function getHistoryByEmployeeId(employeeId: string) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/history/${employeeId}`,
	);
	const data = await res.json();
	return data;
}
