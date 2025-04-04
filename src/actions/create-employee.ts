interface IEmployeeFormData {
	firstName: string;
	lastName: string;
	hireDate: string;
	departmentId: string;
	phone: string;
	address: string;
	avatarUrl?: string;
}

export async function createEmployee(formData: IEmployeeFormData) {
	"use server";

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/employees`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			},
		);

		if (!response.ok) {
			throw new Error("Failed to create employee");
		}

		return await response.json();
	} catch (error) {
		console.error("Error creating employee:", error);
		throw error;
	}
}
