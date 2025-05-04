"use client";

import { Task } from "@/types/types";
import { useEffect, useRef, useState } from "react";
import { deleteTodo, editTodo } from "@/hooks/api";

interface TodoProps {
    todo: Task;
}

export const Todo = ({todo}: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing]);

    const handleEdit = async () => {
        setIsEditing(true);
    }

    const handleSave = async () => {
        await editTodo(todo.id, editedText);
        setIsEditing(false);
    }

    const handleDelete = async () => {
        await deleteTodo(todo.id);
    }

    return (
        <li key={todo.id} className="flex justify-between items-center p-4 bg-white border-l-4 border-blue-500 rounded shadow">
            {isEditing ? (
                <input
                ref={ref}
                type="text"
                className="mr-2 py-1 px-2 border rounded border-gray-400"
                value={editedText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedText(e.target.value)} />
            ) : (
                <span>{todo.text}</span>
            )}
            <div>
                {isEditing ? (
                    <button className="text-blue-500 mr-3" onClick={ handleSave }>Save</button>
                ) : (
                    <button className="text-green-500 mr-3" onClick={ handleEdit }>Edit</button>
                )}
                <button className="text-red-500" onClick={handleDelete}>Delete</button>
            </div>
        </li>
    )
}