import type { ListUserUseCase } from "../use-cases/list-history-use-case";
import { type NextRequest, NextResponse } from "next/server";

export class ListUserController {
	constructor(private readonly listUserUseCase: ListUserUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const { email } = Object.fromEntries(request.nextUrl.searchParams);

			const users = await this.listUserUseCase.execute(email);

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
