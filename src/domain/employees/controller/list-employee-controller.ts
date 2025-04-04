import type { ListEmployeeUseCase } from "../use-cases/list-employee-use-case";
import { type NextRequest, NextResponse } from "next/server";

export class ListEmployeeController {
	constructor(private readonly listEmployeeUseCase: ListEmployeeUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const employees = await this.listEmployeeUseCase.execute();

			return NextResponse.json(employees, { status: 201 });
		} catch (error) {
			return NextResponse.json(
				{ message: error || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
