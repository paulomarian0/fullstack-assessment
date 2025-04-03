import { EmployeeRepository } from "@/domain/repositories/implementation/employee-prisma-implementation";
import { CreateEmployeeUseCase } from "../use-cases/create-employee-use-case";
import { CreateEmployeeController } from "../controller/create-employee-controller";

const employeeRepository = new EmployeeRepository();
const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
const createEmployeeController = new CreateEmployeeController(
	createEmployeeUseCase,
);

export { createEmployeeController };
