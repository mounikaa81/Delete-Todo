import './index.css'

const TodoItem = props => {
  const {todosDetails, deleteList} = props
  const {title, id} = todosDetails

  const onDelete = () => {
    deleteList(id)
  }

  return (
    <li className="todo-con">
      <p className="heading">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
