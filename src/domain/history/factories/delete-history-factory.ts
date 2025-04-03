import { UsersRepository } from "@/domain/repositories/implementation/users-prisma-implementation";
import { DeleteUserUseCase } from "../use-cases/delete-history-use-case";
import { DeleteUserController } from "../controller/delete-history-controller";

const userRepository = new UsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(userRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
