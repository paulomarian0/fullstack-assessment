import { UsersRepository } from "@/domain/repositories/implementation/users-prisma-implementation";
import { ListUserUseCase } from "../use-cases/list-employee-use-case";
import { ListUserController } from "../controller/list-employee-controller";

const usersRepository = new UsersRepository();

const listUserUseCase = new ListUserUseCase(usersRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController };
