import { AddTask } from "@/components/newTodo/AddTask";
import { TodoList } from "@/components/newTodo/TodoList";
import { getAllTodos } from "@/hooks/api";

export default async function NewTodo() {
    const todos = await getAllTodos();
    console.log(todos);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
            <h2 className="text-4xl font-bold text-gray-700">Next.js 13 Todo App</h2>
            <div className="w-full max-w-xl mt-5">
                <div className="w-full py-6 px-8 bg-white rounded-lg shadow-md">
                    <AddTask />
                    <TodoList todos={todos} />
                </div>
            </div>
        </div>
    )
}
