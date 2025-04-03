import { DepartmentRepository } from "@/domain/repositories/implementation/department-prisma-implementation";
import { FindDepartmentUseCase } from "../use-cases/find-department-use-case";
import { FindDepartmentController } from "../controller/find-department-controller";

const departmentRepository = new DepartmentRepository();
const findDepartmentUseCase = new FindDepartmentUseCase(departmentRepository);
const findDepartmentController = new FindDepartmentController(
	findDepartmentUseCase,
);

export { findDepartmentController };
