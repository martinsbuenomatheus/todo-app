import { TodoRepository } from "../../Repository/TodoRepository";

export interface ToggleCheckTodoUseCase {
  invoke: (id: number) => Promise<boolean>;
}

export class ToggleCheckTodo implements ToggleCheckTodoUseCase {
  private todoRepo: TodoRepository;
  constructor(_todoRepo: TodoRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke(id: number) {
    return this.todoRepo.markAsRead(id);
  }
}