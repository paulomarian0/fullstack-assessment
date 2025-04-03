import { UsersRepository } from "@/domain/repositories/implementation/history-prisma-implementation";
import { CreateUserUseCase } from "../use-cases/create-employee-use-case";
import { CreateUserController } from "../controller/create-employee-controller";

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
