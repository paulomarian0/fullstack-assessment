import { DepartmentRepository } from "@/domain/repositories/implementation/department-prisma-implementation";
import { UpdateDepartmentUseCase } from "../use-cases/update-department-use-case";
import { UpdateDepartmentController } from "../controller/update-department-controller";

const departmentRepository = new DepartmentRepository();
const updateDepartmentUseCase = new UpdateDepartmentUseCase(
	departmentRepository,
);
const updateDepartmentController = new UpdateDepartmentController(
	updateDepartmentUseCase,
);

export { updateDepartmentController };
