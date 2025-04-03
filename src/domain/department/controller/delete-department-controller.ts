import type { DeleteDepartmentUseCase } from "../use-cases/delete-department-use-case";
import { type NextRequest, NextResponse } from "next/server";

export class DeleteDepartmentController {
	constructor(
		private readonly deleteDepartmentUseCase: DeleteDepartmentUseCase,
	) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const id = request.nextUrl.pathname.split("/").pop();
			await this.deleteDepartmentUseCase.execute({ id } as { id: string });

			return NextResponse.json(
				{ message: "User deleted successfully" },
				{ status: 201 },
			);
		} catch (error) {
			console.log(error);
			return NextResponse.json(
				{ message: error.message || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
