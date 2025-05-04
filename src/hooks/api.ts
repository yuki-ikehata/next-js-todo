import { Todo } from "@/types/types";

export const getAllTodos = async (): Promise<Todo[]> => {
    const res = await fetch("http://localhost:3001/todos", {cache: "no-store"});
    const data = await res.json();
    return data;
}