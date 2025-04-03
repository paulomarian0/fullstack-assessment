import { UsersRepository } from "@/domain/repositories/implementation/users-prisma-implementation";
import { FindUserUseCase } from "../use-cases/find-history-use-case";
import { FindUserController } from "../controller/find-history-controller";

const usersRepository = new UsersRepository();

const findUserUseCase = new FindUserUseCase(usersRepository);

const findUserController = new FindUserController(findUserUseCase);

export { findUserController };
