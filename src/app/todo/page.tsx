'use client'

import { TodoInput } from '@/components/todo/todo_input';
import { TodoOutput } from '@/components/todo/todo_output';
import { useTodos } from '@/hooks/useTodos';
import Link from "next/link";

export default function Todo() {
  const Todos = useTodos();


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="text-4xl font-bold">todoページです</h2>
        <TodoInput inputValue={Todos.inputValue} handleInputChange={Todos.handleInputChange} handelAddTodo={Todos.handelAddTodo} />
        <TodoOutput todos={Todos.todos} handelDeleteTodo={Todos.handelDeleteTodo} />
        <Link href="/">TOPページへ</Link>
      </main>
    </div>
  );
}