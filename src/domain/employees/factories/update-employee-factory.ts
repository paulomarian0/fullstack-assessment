import { UsersRepository } from "@/domain/repositories/implementation/users-prisma-implementation";
import { UpdateUserUseCase } from "../use-cases/update-employee-use-case";
import { UpdateUserController } from "../controller/update-employee-controller";

const usersRepository = new UsersRepository();

const updateUserUseCase = new UpdateUserUseCase(usersRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
