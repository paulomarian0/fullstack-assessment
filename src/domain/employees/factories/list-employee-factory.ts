import { EmployeeRepository } from "@/domain/repositories/implementation/employee-prisma-implementation";
import { ListEmployeeUseCase } from "../use-cases/list-employee-use-case";
import { ListEmployeeController } from "../controller/list-employee-controller";

const employeeRepository = new EmployeeRepository();
const listEmployeeUseCase = new ListEmployeeUseCase(employeeRepository);
const listEmployeeController = new ListEmployeeController(listEmployeeUseCase);

export { listEmployeeController };
