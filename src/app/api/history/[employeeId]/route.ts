import { listHistoryController } from "@/domain/history/factories/list-history-factory";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	return listHistoryController.handle(req);
}
