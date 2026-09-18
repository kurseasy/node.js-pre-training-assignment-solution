// NestJS Controller for /todos
import { Controller, Get } from '@nestjs/common';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Controller('todos')
export class TodosController {
  private todos: Todo[] = [
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
    { id: 3, title: 'Write code', completed: false },
  ];

  @Get()
  getTodos(): Todo[] {
    return this.todos;
  }
}
