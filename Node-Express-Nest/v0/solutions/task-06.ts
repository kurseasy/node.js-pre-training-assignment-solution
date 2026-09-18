// NestJS Service for ToDos
import { Injectable, NotFoundException } from '@nestjs/common';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
    { id: 3, title: 'Write code', completed: false },
  ];

  private nextId = 4;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  markCompleted(id: number): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    todo.completed = true;
    return todo;
  }
}
