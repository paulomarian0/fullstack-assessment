import { createEmployeeController } from "@/domain/employees/factories/create-employee-factory";
import { listEmployeeController } from "@/domain/employees/factories/list-employee-factory";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	return listEmployeeController.handle(req);
}

export async function POST(req: NextRequest) {
	return createEmployeeController.handle(req);
}
