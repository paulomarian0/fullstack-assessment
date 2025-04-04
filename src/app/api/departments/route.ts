import { listDepartmentController } from "@/domain/department/factories/list-department-factory";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	return listDepartmentController.handle(req);
}
