interface TodoInputProps {
    inputValue: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handelAddTodo: () => void;
}

export const TodoInput = (props: TodoInputProps) => {
    return (
        <div className='input-area'>
            <input type='text' value={props.inputValue} onChange={props.handleInputChange} className='border border-black' />
            <button type='button' onClick={props.handelAddTodo}>+</button>
        </div>
    )
}