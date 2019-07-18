import React, {useState} from 'react';

const Todo = () => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [todoLength, setTodoLength] = useState('10');

    const inputChangeHandler = event => {
        setTodoName(event.target.value)
    };

    const todoListHandler = () => {
        setTodoList(todoList.concat(todoName))
    };

    const selectChangeHandler = event => {
        setTodoLength(event.target.value)
    };

    return (
        <React.Fragment>
            <input type="text" onChange={inputChangeHandler.bind(this)} value={todoName} placeholder="To Do" />
            <button type="button" onClick={todoListHandler.bind(this)}>Add Todo</button>
            <select value={todoLength} onChange={selectChangeHandler.bind(this)}>
                <option value="10">10 min</option>
                <option value="20">20 min</option>
                <option value="30">30 min</option>
                <option value="40">40 min</option>
            </select>
            <ul>
                {todoList.map((name, i) => {
                    return <li key={i}>{name}</li>;
                })}
            </ul>
            {todoLength ? <h4>Current Time Selected: {todoLength}</h4> : null}
        </React.Fragment>
    );
};

export default Todo;