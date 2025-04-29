import { useState } from "react";

export const useTodos = () => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const [todos, setTodos] = useState<string[]>([]);
    const handelAddTodo = () => {
        setTodos([...todos, inputValue]);
        setInputValue('');
    }
    const handelDeleteTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        // const newTodos = todos.filter((_, i) => i !== index);
        // const newTodos = todos.filter((todo) => todo !== todos[index]);
        setTodos(newTodos);
    }

    return { inputValue, handleInputChange, handelAddTodo, handelDeleteTodo, todos }
}