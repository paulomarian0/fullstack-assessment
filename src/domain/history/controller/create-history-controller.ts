import { type NextRequest, NextResponse } from "next/server";
import type { CreateHistoryUseCase } from "../use-cases/create-history-use-case";

export class CreateHistoryController {
	constructor(private readonly createHistoryUseCase: CreateHistoryUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const { employeeId, departmentId } = await request.json();
			const history = await this.createHistoryUseCase.execute({
				employeeId,
				departmentId,
			});

			return NextResponse.json(history, { status: 201 });
		} catch (error) {
			return NextResponse.json(
				{ message: error || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
