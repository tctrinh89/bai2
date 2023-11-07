import {useState} from 'react'

function ToDoList(){

    const [todos,setTodo]=useState([])
    const [itemTodo,setItemTodo]=useState({text:'',state:''})
    const handleChange = (e)=>{
        setItemTodo({text:e.target.value,state:'new'})
    }
    const handleClick=()=>{
        if(itemTodo.text!==''){
            setTodo([...todos,itemTodo])
            setItemTodo({text:'',state:'new'})
        }
    }
    
    const [check,setCheck]=useState([])
    const handleCheck=(index)=>{
        const a=document.getElementById(index);
        if(check.includes(index)){
            setCheck(check.filter( item => item !== index))
            a.setAttribute("class",'new')
           } else {
           setCheck(a =>[...a,index]);
           a.setAttribute("class",'done')
         }
    }
        
    return (
        <div>
        <input value={itemTodo.text}
        onChange={e=>handleChange(e)}/>
        <button
        onClick={handleClick}
        >add</button>

        <div className='checkbox'>
            {todos.map( (c,index) => (
                <div key = {index}
                id={index}
                // className = {state}
                >
                <input type="checkbox" 
                checked={check.includes(index)}
                onChange={()=>handleCheck(index)}
                />
                {c.text}
                </div>
            )
            )}
        </div>
    </div>
    )
}

export default ToDoList;