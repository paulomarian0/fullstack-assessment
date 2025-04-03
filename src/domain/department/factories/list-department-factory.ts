import { DepartmentRepository } from "@/domain/repositories/implementation/department-prisma-implementation";
import { ListDepartmentUseCase } from "../use-cases/list-department-use-case";
import { ListDepartmentController } from "../controller/list-department-controller";

const departmentRepository = new DepartmentRepository();
const listDepartmentUseCase = new ListDepartmentUseCase(departmentRepository);
const listDepartmentController = new ListDepartmentController(
	listDepartmentUseCase,
);

export { listDepartmentController };
