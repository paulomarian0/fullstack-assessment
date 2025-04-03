import { DepartmentRepository } from "@/domain/repositories/implementation/department-prisma-implementation";
import { CreateDepartmentUseCase } from "../use-cases/create-department-use-case";
import { CreateDepartmentController } from "../controller/create-department-controller";

const departmentRepository = new DepartmentRepository();
const createDepartmentUseCase = new CreateDepartmentUseCase(
	departmentRepository,
);
const createDepartmentController = new CreateDepartmentController(
	createDepartmentUseCase,
);

export { createDepartmentController };
