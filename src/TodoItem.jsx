import PropTypes from "prop-types";

export function TodoItem({ completed, id, title, description, dueDate, toggleTodo, deleteTodo }) {
    return (
        <li className="list-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
                id={`checkbox-${id}`}
                className="list-checkbox"
            />
            <label htmlFor={`checkbox-${id}`} className="list-label">
                <h3 className="task-title">{title}</h3>
            </label>
            <p className="task-description">{description}</p>
            <p className="task-dueDate">{dueDate}</p>
            <button
                onClick={() => deleteTodo(id)}
                className="btn btn-danger"
            >
                Delete
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
};