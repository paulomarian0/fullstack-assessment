import { type NextRequest, NextResponse } from "next/server";
import type { UpdateDepartmentUseCase } from "../use-cases/update-department-use-case";

export class UpdateDepartmentController {
	constructor(
		private readonly updateDepartmentUseCase: UpdateDepartmentUseCase,
	) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const id = request.nextUrl.pathname.split("/").pop() as string;
			const { name } = await request.json();

			const user = await this.updateDepartmentUseCase.execute({ id, name });

			return NextResponse.json(user, { status: 201 });
		} catch (error) {
			console.log(error);
			return NextResponse.json(
				{ message: error.message || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
