import { UsersRepository } from "@/domain/repositories/implementation/users-prisma-implementation";
import { DeleteUserUseCase } from "../use-cases/delete-department-use-case";
import { DeleteUserController } from "../controller/delete-department-controller";

const userRepository = new UsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(userRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
