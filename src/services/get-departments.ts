interface IDepartment {
	id: string;
	name: string;
}

export async function getDepartments(): Promise<IDepartment[]> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/departments`);
	const data = await res.json();
	return data;
}
