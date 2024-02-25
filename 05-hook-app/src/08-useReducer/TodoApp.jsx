import { useTodos } from '../hooks/useTodos'; 
import { TodoList } from './';
import { TodoAdd } from './';

export const TodoApp = () => {
    
    const {todos, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();

    return(
        <>
            <h1>TodoApp: { todos.length }, <small>pendientes: {todos.filter( todo => !todo.done ).length}</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo = { handleDeleteTodo }
                        onToggleTodo = { handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo( todo) */}
                    {/* {id: new Data()...,description:'',done:false} */}
                    <TodoAdd 
                        onNewTodo={(todo) => handleNewTodo(todo)}
                    />
                    {/* fin TodoAdd */}
                </div>
            </div>
        </>
    )
}