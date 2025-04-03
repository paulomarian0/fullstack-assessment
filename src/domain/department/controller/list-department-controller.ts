import type { ListDepartmentUseCase } from "../use-cases/list-department-use-case";
import { type NextRequest, NextResponse } from "next/server";

export class ListDepartmentController {
	constructor(private readonly listDepartmentUseCase: ListDepartmentUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const { email } = Object.fromEntries(request.nextUrl.searchParams);

			const users = await this.listDepartmentUseCase.execute(email);

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
