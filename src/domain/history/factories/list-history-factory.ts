import { HistoryRepository } from "@/domain/repositories/implementation/history-prisma-implementation";
import { ListHistoryUseCase } from "../use-cases/list-history-use-case";
import { ListHistoryController } from "../controller/list-history-controller";

const historyRepository = new HistoryRepository();
const listHistoryUseCase = new ListHistoryUseCase(historyRepository);
const listHistoryController = new ListHistoryController(listHistoryUseCase);

export { listHistoryController };
