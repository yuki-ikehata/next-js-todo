'use client'
import { useState } from 'react';

export default function Todo() {
  const [inputValue, setInputValue] = useState('')
  const handelInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  const [todos, setTodos] = useState<string[]>([]);
  const handelAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  }
  const handelDeleteTodo = (index: number) => {
    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">todoページです</h1>
        <div className='input-area'>
          <input type='text' value={inputValue} onChange={handelInputChange}className='border border-black' />
          <button type='button' onClick={handelAddTodo}>+</button>
        </div>
        <div className='output-area'>
          <ul>
            {todos.map((todo, index) => {
              return <li key={index}>{todo}<button type='button' onClick={() => {handelDeleteTodo(index)}}>-</button></li>
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}