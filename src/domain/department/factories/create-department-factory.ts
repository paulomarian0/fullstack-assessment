import { UsersRepository } from "@/domain/repositories/implementation/users-prisma-implementation";
import { CreateUserUseCase } from "../use-cases/create-department-use-case";
import { CreateUserController } from "../controller/create-department-controller";

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
