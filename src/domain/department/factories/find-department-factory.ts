import { UsersRepository } from "@/domain/repositories/implementation/users-prisma-implementation";
import { FindUserUseCase } from "../use-cases/find-department-use-case";
import { FindUserController } from "../controller/find-department-controller";

const usersRepository = new UsersRepository();

const findUserUseCase = new FindUserUseCase(usersRepository);

const findUserController = new FindUserController(findUserUseCase);

export { findUserController };
