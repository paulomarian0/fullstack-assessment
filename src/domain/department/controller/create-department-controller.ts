import { type NextRequest, NextResponse } from "next/server";
import type { CreateDepartmentUseCase } from "../use-cases/create-department-use-case";

export class CreateDepartmentController {
	constructor(
		private readonly createDepartmentUseCase: CreateDepartmentUseCase,
	) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const { id, name, email } = await request.json();
			const department = await this.createDepartmentUseCase.execute({
				id,
				name,
				email,
			});

			return NextResponse.json(department, { status: 201 });
		} catch (error) {
			return NextResponse.json(
				{ message: error.message || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
