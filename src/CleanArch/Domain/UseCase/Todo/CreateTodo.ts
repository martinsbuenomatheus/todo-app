import { Todo } from "../../Model/Todo";
import { TodoRepository } from "../../Repository/TodoRepository";

export interface CreateTodosUseCase {
  invoke: (value: string) => Promise<Todo>;
}

export class CreateTodo implements CreateTodosUseCase {
  private todoRepo: TodoRepository;
  constructor(_todoRepo: TodoRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke(value: string) {
    if (value.length <= 0) {
      throw new Error("Título é obrigatório.");
    }
    else if(value.length > 500){
      throw new Error("Máximo 500 caracteres.");
    }
    const created = this.todoRepo.createTodo(value);
    return created;
  }
}