import { type NextRequest, NextResponse } from "next/server";
import type { ListHistoryUseCase } from "../use-cases/list-history-use-case";

export class ListHistoryController {
	constructor(private readonly createHistoryUseCase: ListHistoryUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const employeeId = request.nextUrl.pathname.split("/").pop() as string;
			const history = await this.createHistoryUseCase.execute({ employeeId });

			return NextResponse.json(history, { status: 201 });
		} catch (error) {
			return NextResponse.json(
				{ message: error || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
