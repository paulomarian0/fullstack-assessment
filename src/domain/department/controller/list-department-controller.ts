import type { ListDepartmentUseCase } from "../use-cases/list-department-use-case";
import { type NextRequest, NextResponse } from "next/server";

export class ListDepartmentController {
	constructor(private readonly listDepartmentUseCase: ListDepartmentUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const departments = await this.listDepartmentUseCase.execute();

			return NextResponse.json(departments, { status: 201 });
		} catch (error) {
			console.log(error);
			return NextResponse.json(
				{ message: error.message || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
