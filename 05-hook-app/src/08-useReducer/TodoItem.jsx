export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

        const { id , description } = todo;

    return(
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span 
                    className={ `align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' } `}
                    onClick={ () => onToggleTodo(id)}
                >
                    {description}
                </span>
                <button 
                    className="btn btn-danger" 
                    onClick={ () => onDeleteTodo(id)}
                >
                    Borrar
                </button>
            </li>
        </>
    )
}