import { useState } from "react"
import PropTypes from "prop-types";

export function NewTodoForm({ onSubmit }) { //onSubmit -> props
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        if (title === "") return;

        onSubmit(title, description, dueDate)

        setTitle("");
        setDescription("");
        setDueDate("");
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row ">
                <label htmlFor="title">Title</label>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    id="title" />
            </div>
            <div className="form-row task-description">
                <label htmlFor="description">Description</label>
                <input
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type="text"
                    id="description" />
            </div>
            <div className="form-row task-dueDate">
                <label htmlFor="dueDate">Due date</label>
                <input
                    value={dueDate}
                    onChange={e => setDueDate(e.target.value)}
                    type="text"
                    id="dueDate" />
            </div>
            <button className="btn form-btn">Add</button>
        </form>
    )
}

NewTodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};