import PropTypes from 'prop-types'; // Импортируйте PropTypes
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo} 
                />
            ))}
        </div>
    );
}

// Добавьте валидацию пропсов
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired, // Валидация для toggleTodo
    deleteTodo: PropTypes.func.isRequired, // Валидация для deleteTodo
};

export default TodoList;
