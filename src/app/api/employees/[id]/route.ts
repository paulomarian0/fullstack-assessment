import { deleteEmployeeController } from "@/domain/employees/factories/delete-employee-factory";
import { findEmployeeController } from "@/domain/employees/factories/find-employee-factory";
import type { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
	return deleteEmployeeController.handle(req);
}

export async function GET(req: NextRequest) {
	return findEmployeeController.handle(req);
}
