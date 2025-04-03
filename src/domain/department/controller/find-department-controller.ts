import { type NextRequest, NextResponse } from "next/server";
import type { FindDepartmentUseCase } from "../use-cases/find-department-use-case";

export class FindDepartmentController {
	constructor(private readonly findDepartmentUseCase: FindDepartmentUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const { id, email, name } = Object.fromEntries(
				request.nextUrl.searchParams,
			);
			const users = await this.findDepartmentUseCase.execute({
				id,
				name,
				email,
			});

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
