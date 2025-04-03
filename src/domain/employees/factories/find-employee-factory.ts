import { EmployeeRepository } from "@/domain/repositories/implementation/employee-prisma-implementation";
import { FindEmployeeUseCase } from "../use-cases/find-employee-use-case";
import { FindEmployeeController } from "../controller/find-employee-controller";

const employeeRepository = new EmployeeRepository();
const findEmployeeUseCase = new FindEmployeeUseCase(employeeRepository);
const findEmployeeController = new FindEmployeeController(findEmployeeUseCase);

export { findEmployeeController };
