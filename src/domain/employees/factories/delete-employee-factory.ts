import { UsersRepository } from "@/domain/repositories/implementation/history-prisma-implementation";
import { DeleteUserUseCase } from "../use-cases/delete-employee-use-case";
import { DeleteUserController } from "../controller/delete-employee-controller";

const userRepository = new UsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(userRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
