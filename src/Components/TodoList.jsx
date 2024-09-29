import React, {useState} from "react";

const TodoList = () => {
    const [todos,setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [listInputs, setListInputs] = useState({});
    const [isVisible,setIsvisible] = useState(false);
    const [buttonText,setButtonText] = useState('Show');

    const handleAddTodo = () => {
        if (headingInput.trim() !== ''){
            setTodos([...todos,{heading: headingInput, lists: []}]);
            setHeadingInput('');
        }
    }
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        if (newTodos[index].lists.length === 0) {
            setIsvisible(false);
            setButtonText('Show');
          }
        };        

    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim !== ''){
            const newTodos = [...todos];
            newTodos[index].lists.push(listInputs[index]);
            setTodos(newTodos);
            setListInputs({...listInputs, [index]: ''});
            setIsvisible(true);
            setButtonText('Hide');

        }
    };
    const handleListInputChange = (index,value) => {
        setListInputs({...listInputs,[index]: value});
    };
    const showList = () => {
            setIsvisible(!isVisible)
            setButtonText(isVisible ? 'Show' : 'Hide');
        
    }

    return(
        <>
            <div className="container mx-auto">
                <h1 className="text-4xl strong m-4">My Todo List</h1>
                <div>
                    <input 
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4"
                        placeholder="Enter Heading"
                        value={headingInput}
                        onChange={(e) => {setHeadingInput(e.target.value)}}
                        />
                    <button onClick={handleAddTodo} className="bg-emerald-400 text-neutral-100 px-6 py-2 rounded-md border-0 font-bold
                        hover:bg-teal-600">Add Heading</button>      
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {todos.map((todo, index) => (
    <div 
      key={index} 
      className="bg-gray-200 border-2 border-gray-400 rounded-md py-2 px-4 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">{todo.heading}</h3>
        <button 
          className="m-4 bg-emerald-400 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDeleteTodo(index)}
        >
          Delete Heading
        </button>
      </div>
      <div className='add_list'>
        <input 
          type="text" 
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4"
          placeholder="Add List" 
          value={listInputs[index] || ''} 
          onChange={(e) => handleListInputChange(index, e.target.value)}
        />
        <button 
          className="bg-emerald-400 text-neutral-100 px-6 py-2 mx-2 rounded-md border-0 font-bold hover:bg-teal-600"
          onClick={() => handleAddList(index)}
        >
          Add List
        </button>
        <button 
          className="bg-emerald-400 text-neutral-100 px-6 py-2 rounded-md border-0 font-bold hover:bg-teal-600"
          onClick={showList}
        >
          {buttonText} List
        </button>
        <ul>
          {todo.lists.map((list, listIndex) => (
            <li key={listIndex} className='table-auto w-full bg-gray-100'>
              <p className="p-2">{list}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>
</>
    );
}

export default TodoList