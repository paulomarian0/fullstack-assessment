import { deleteEmployeeController } from "@/domain/employees/factories/delete-employee-factory";
import type { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
	return deleteEmployeeController.handle(req);
}
