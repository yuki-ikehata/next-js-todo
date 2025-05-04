import { Task } from "@/types/types";
import { Todo } from "@/components/newTodo/todo";

interface TodoListProps {
    todos: Task[];
}

export const TodoList = ({todos}: TodoListProps) => {
    return (
        <ul className="space-y-3">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}