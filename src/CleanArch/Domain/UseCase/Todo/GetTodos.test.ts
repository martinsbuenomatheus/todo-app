// Importações necessárias
import { GetTodos } from './GetTodos'; // Ajuste o caminho conforme necessário
import { TodoRepository } from "../../Repository/TodoRepository"; // Ajuste o caminho
import { Todo } from "../../Model/Todo"; // Ajuste o caminho

// Mock do repositório
const mockTodoRepo: jest.Mocked<TodoRepository> = {
    getTodos: jest.fn(),
    createTodo: jest.fn(),
    markAsRead: jest.fn(),
    removeTodo: jest.fn(),
  };

// Exemplo de dados simulados
const sampleTodos: Todo[] = [
  { id: 1, title: 'Learn TypeScript', isComplete: false },
  { id: 2, title: 'Write Unit Tests', isComplete: true },
];

describe('GetTodos UseCase', () => {
  it('should call getTodos from the repository and return the result', async () => {
    // Configurar o mock para retornar os dados simulados
    mockTodoRepo.getTodos.mockResolvedValue(sampleTodos);

    // Instanciar o caso de uso com o repositório simulado
    const getTodosUseCase = new GetTodos(mockTodoRepo);

    // Chamar o método `invoke`
    const result = await getTodosUseCase.invoke();

    // Verificações
    expect(mockTodoRepo.getTodos).toHaveBeenCalledTimes(1); // Verifica se foi chamado uma vez
    expect(result).toEqual(sampleTodos); // Verifica se o resultado está correto
  });

  it('should handle errors thrown by the repository', async () => {
    // Configurar o mock para lançar um erro
    mockTodoRepo.getTodos.mockRejectedValue(new Error('Repository error'));

    // Instanciar o caso de uso com o repositório simulado
    const getTodosUseCase = new GetTodos(mockTodoRepo);

    // Chamar o método `invoke` e verificar se ele lança um erro
    await expect(getTodosUseCase.invoke()).rejects.toThrow('Repository error');
    expect(mockTodoRepo.getTodos).toHaveBeenCalledTimes(1);
  });
});
