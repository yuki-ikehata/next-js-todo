import { Todo } from "@/types/types";

interface TodoListProps {
    todos: Todo[];
}

export const TodoList = ({todos}: TodoListProps) => {
    return (
        <ul className="space-y-3">
            {todos.map((todo) => (
                <li key={todo.id} className="flex justify-between items-center p-4 bg-white border-l-4 border-blue-500 rounded shadow">
                    <span>{todo.text}</span>
                    <div>
                        <button className="text-green-500 mr-3">Edit</button>
                        <button className="text-red-500">Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}