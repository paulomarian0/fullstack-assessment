import { UsersRepository } from "@/domain/repositories/implementation/history-prisma-implementation";
import { CreateUserUseCase } from "../use-cases/create-history-use-case";
import { CreateUserController } from "../controller/create-history-controller";

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
