import { type NextRequest, NextResponse } from "next/server";
import type { CreateEmployeeUseCase } from "../use-cases/create-employee-use-case";

export class CreateEmployeeController {
	constructor(private readonly createEmployeeUseCase: CreateEmployeeUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const {
				firstName,
				lastName,
				hireDate,
				phone,
				address,
				status,
				departmentId,
			} = await request.json();
			const employee = await this.createEmployeeUseCase.execute({
				firstName,
				lastName,
				hireDate,
				phone,
				address,
				status,
				departmentId,
			});

			return NextResponse.json(employee, { status: 201 });
		} catch (error) {
			return NextResponse.json(
				{ message: error.message || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
