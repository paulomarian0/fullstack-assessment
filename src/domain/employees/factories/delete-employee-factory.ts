import { EmployeeRepository } from "@/domain/repositories/implementation/employee-prisma-implementation";
import { DeleteEmployeeUseCase } from "../use-cases/delete-employee-use-case";
import { DeleteEmployeeController } from "../controller/delete-employee-controller";

const employeeRepository = new EmployeeRepository();
const deleteEmployeeUseCase = new DeleteEmployeeUseCase(employeeRepository);
const deleteEmployeeController = new DeleteEmployeeController(
	deleteEmployeeUseCase,
);

export { deleteEmployeeController };
