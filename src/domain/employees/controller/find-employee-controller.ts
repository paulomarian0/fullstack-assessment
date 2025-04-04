import { type NextRequest, NextResponse } from "next/server";
import type { FindEmployeeUseCase } from "../use-cases/find-employee-use-case";

export class FindEmployeeController {
	constructor(private readonly findEmployeeUseCase: FindEmployeeUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const id = request.nextUrl.pathname.split("/").pop();
			const users = await this.findEmployeeUseCase.execute({ id });

			return NextResponse.json(users, { status: 201 });
		} catch (error) {
			console.log(error);
			return NextResponse.json(
				{ message: error.message || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
