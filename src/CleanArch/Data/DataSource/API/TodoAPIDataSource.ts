import { Todo } from "../../../Domain/Model/Todo";
import TodoDataSource from "../TodoDataSource";
import { TodoAPIEntity } from "./Entity/TodoAPIEntity";
import localDB from "./LocalDB";

let idGenerator = 0;

export default class TodoAPIDataSourceImpl implements TodoDataSource {
  db = localDB<TodoAPIEntity>("todos");
  
  async getTodos(): Promise<Todo[]> {
    const data = this.db?.getAll();

    return data?.map((item) => ({
      id: item.id,
      title: item.title,
      isComplete: item.is_completed,
    }));
  }  
  
  async createTodo(value: string) {
    const res: Todo = {
      id: idGenerator++,
      isComplete: false,
      title: value,
    };

    this.db.create({
      id: res.id,
      is_completed: res.isComplete,
      title: res.title,
    });
    return res;
  }

  async toggleTodoCheck(id: number) {
    const item = this.db.updateByField(id, "is_completed", "toggle");
    return item.is_completed;
  }

  async removeTodo(id: number) {
    return this.db.removeById(id);
  }
}