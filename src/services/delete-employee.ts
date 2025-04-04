export async function deleteEmployee(employeeId: string) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/employees/${employeeId}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		if (!response.ok) {
			throw new Error("Failed to delete employee");
		}

		return await response.json();
	} catch (error) {
		console.error("Error deleting employee:", error);
		throw error;
	}
}
