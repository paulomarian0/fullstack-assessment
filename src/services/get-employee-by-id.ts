export async function getEmployeeById(id: string) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/employees/${id}`,
	);
	const data = await res.json();
	return data;
}
