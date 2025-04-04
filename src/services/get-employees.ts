export async function getEmployees() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/employees`);
	const data = await res.json();
	return data;
}
