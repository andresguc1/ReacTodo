import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      You are finish the <span>{completed}</span> of <span>{total}</span> task
      TODOS
    </h1>
  )
}

export { TodoCounter }
