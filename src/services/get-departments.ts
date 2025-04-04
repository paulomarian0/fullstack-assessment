export async function getDepartments() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/departments`);
	const data = await res.json();
	return data;
}
