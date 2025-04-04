import { EmployeeRepository } from "@/domain/repositories/implementation/employee-prisma-implementation";
import { UpdateEmployeeUseCase } from "../use-cases/update-employee-use-case";
import { UpdateEmployeeController } from "../controller/update-employee-controller";
import { HistoryRepository } from "@/domain/repositories/implementation/history-prisma-implementation";

const employeeRepository = new EmployeeRepository();
const historyRepository = new HistoryRepository();
const updateEmployeeUseCase = new UpdateEmployeeUseCase(
	employeeRepository,
	historyRepository,
);
const updateEmployeeController = new UpdateEmployeeController(
	updateEmployeeUseCase,
);

export { updateEmployeeController };
