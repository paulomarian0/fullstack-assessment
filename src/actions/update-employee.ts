export const handleUpdateEmployee = async (
	employeeId: string,
	updateData: { [key: string]: any },
) => {
	"use server";

	const res = await fetch(`http://localhost:3000/api/employees/${employeeId}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updateData),
	});

	if (!res.ok) {
		throw new Error("Failed to update employee");
	}

	return await res.json();
};
