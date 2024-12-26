import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props
    const filteredtodolist = selectedTab === 'All' ? todos :
        selectedTab === 'Completed' ? todos.filter(val => val.complete) :
        todos.filter(val  => !val.complete)
    return (
       <>
        {filteredtodolist.map((todo, todoindex) => {
            return (
                <TodoCard 
                    key={todoindex}
                    todoindex={todos.findIndex(val => val.input == todo.input)}
                    {...props} 
                    todo={todo} />
            )
        })}
       </>
    )
}