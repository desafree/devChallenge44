import Todo from "./Todo";

const Completed = ({todos,removeTodo,toggleTodo, deleteAll}) => {

    return ( 
        <>

            <div className="completed">
                {todos.map((todo,index)=>{
                    if(todo.done) {
                        return <Todo todo={todo} index={index} toggleTodo={toggleTodo} key={index} removeTodo={removeTodo}></Todo>
                    }
                    return null
                })}
                <button className="closeAll" onClick={deleteAll}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>delete all</button>
            </div>
        </>
     );
}
 
export default Completed;