import type { UpdateEmployeeUseCase } from "../use-cases/update-employee-use-case";
import { type NextRequest, NextResponse } from "next/server";

export class UpdateEmployeeController {
	constructor(private readonly updateEmployeeUseCase: UpdateEmployeeUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const id = request.nextUrl.pathname.split("/").pop() as string;
			const { departmentId, status } = await request.json();

			await this.updateEmployeeUseCase.execute({
				id,
				departmentId,
				status,
			});

			return NextResponse.json(
				{
					message: "Employee updated successfully.",
				},
				{ status: 200 },
			);
		} catch (error) {
			return NextResponse.json(
				{ message: error || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
