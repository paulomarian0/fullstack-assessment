interface IEmployee {
	id: string;
	firstName: string;
	lastName: string;
	hireDate: string;
	department: {
		id: string;
		name: string;
	};
	phone: string;
	address: string;
	status: boolean;
}

export async function getEmployees(): Promise<IEmployee[]> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/employees`);
	const data = await res.json();
	return data;
}
