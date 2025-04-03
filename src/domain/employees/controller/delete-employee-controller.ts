import { type NextRequest, NextResponse } from "next/server";
import type { DeleteEmployeeUseCase } from "../use-cases/delete-employee-use-case";

export class DeleteEmployeeController {
	constructor(private readonly deleteEmployeeUseCase: DeleteEmployeeUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const id = request.nextUrl.pathname.split("/").pop();
			await this.deleteEmployeeUseCase.execute({ id } as { id: string });

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
