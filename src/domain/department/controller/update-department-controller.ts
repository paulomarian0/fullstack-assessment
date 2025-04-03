import type { UpdateUserUseCase } from "../use-cases/update-department-use-case";
import { type NextRequest, NextResponse } from "next/server";

export class UpdateUserController {
	constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const id = request.nextUrl.pathname.split("/").pop() as string;
			const { name } = await request.json();

			const user = await this.updateUserUseCase.execute({ id, name });

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
