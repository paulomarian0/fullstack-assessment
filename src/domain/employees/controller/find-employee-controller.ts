import { type NextRequest, NextResponse } from "next/server";
import type { FindUserUseCase } from "../use-cases/find-employee-use-case";

export class FindUserController {
	constructor(private readonly findUserUseCase: FindUserUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const { id, email, name } = Object.fromEntries(
				request.nextUrl.searchParams,
			);
			const users = await this.findUserUseCase.execute({ id, name, email });

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
