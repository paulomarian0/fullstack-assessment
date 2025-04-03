import { UsersRepository } from "@/domain/repositories/implementation/history-prisma-implementation";
import { UpdateUserUseCase } from "../use-cases/update-history-use-case";
import { UpdateUserController } from "../controller/update-history-controller";

const usersRepository = new UsersRepository();

const updateUserUseCase = new UpdateUserUseCase(usersRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
