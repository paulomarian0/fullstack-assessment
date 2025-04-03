import { EmployeeRepository } from "@/domain/repositories/implementation/employee-prisma-implementation";
import { UpdateEmployeeUseCase } from "../use-cases/update-employee-use-case";
import { UpdateEmployeeController } from "../controller/update-employee-controller";

const employeeRepository = new EmployeeRepository();
const updateEmployeeUseCase = new UpdateEmployeeUseCase(employeeRepository);
const updateEmployeeController = new UpdateEmployeeController(
	updateEmployeeUseCase,
);

export { updateEmployeeController };
