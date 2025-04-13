interface TodoOutputProps {
    todos: string[];
    handelDeleteTodo: (index: number) => void;
}

export const TodoOutput = (props: TodoOutputProps) => {
    return (
        <div className='output-area'>
            <ul>
                {props.todos.map((todo, index) => {
                return <li key={index}>{todo}<button type='button' onClick={() => {props.handelDeleteTodo(index)}}>-</button></li>
                })}
            </ul>
        </div>
    )
}