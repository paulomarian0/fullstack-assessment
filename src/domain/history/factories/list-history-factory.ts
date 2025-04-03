import { UsersRepository } from "@/domain/repositories/implementation/users-prisma-implementation";
import { ListUserUseCase } from "../use-cases/list-history-use-case";
import { ListUserController } from "../controller/list-history-controller";

const usersRepository = new UsersRepository();

const listUserUseCase = new ListUserUseCase(usersRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController };
