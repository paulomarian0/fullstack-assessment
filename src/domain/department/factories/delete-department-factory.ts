import { DepartmentRepository } from "@/domain/repositories/implementation/department-prisma-implementation";
import { DeleteDepartmentUseCase } from "../use-cases/delete-department-use-case";
import { DeleteDepartmentController } from "../controller/delete-department-controller";

const departmentRepository = new DepartmentRepository();
const deleteDepartmentUseCase = new DeleteDepartmentUseCase(
	departmentRepository,
);
const deleteDepartmentController = new DeleteDepartmentController(
	deleteDepartmentUseCase,
);

export { deleteDepartmentController };
