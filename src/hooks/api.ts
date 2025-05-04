import { Task } from "@/types/types";

export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/todos`, {
        cache: "no-store" // SSR
    });
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: Task): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    const newTodo = await res.json();
    return newTodo;
}

export const editTodo = async (id:string, newText:string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({text: newText}),
    });
    const updatedTodo = await res.json();
    return updatedTodo;
}

export const deleteTodo = async (id:string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const deletedTodo = await res.json();
    return deletedTodo;
}