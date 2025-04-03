import type { UpdateEmployeeUseCase } from "../use-cases/update-employee-use-case";
import { type NextRequest, NextResponse } from "next/server";

export class UpdateEmployeeController {
	constructor(private readonly updateEmployeeUseCase: UpdateEmployeeUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const id = request.nextUrl.pathname.split("/").pop() as string;
			const { address, phone, status } = await request.json();

			const user = await this.updateEmployeeUseCase.execute({
				id,
				address,
				phone,
				status,
			});

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
