import {useState} from 'react'


function Add(){

    const [item,setItem]=useState({text:'',state:''})
    const [todos,setTodo]=useState([])
        console.log(item)
        console.log(todos)
    const handleChange =(e)=>{
        setItem({text:e.target.value,state:'new'});
    }

    const handleClick =()=>{
        if(item.text !==''){
            setTodo([...todos,item])
            setItem({text:'',state:''})
        }
    }

    const [check,setCheck]=useState([])
    console.log(check)

    const [state,setState]=useState('new')
    const handleCheck=(index)=>{
        const id=document.getElementById(index)
        if(check.includes(index)){
            setCheck(check.filter(item=>item !== index))
    // console.log(check.includes(index))
            setState('new')
        todos[index] = {...todos[index],state:state}
            id.setAttribute('class','new')
            id.setAttribute('state','new')
            
        } else {
            setCheck([...check,index])
            setState('done')
            todos[index] = {...todos[index],state:state}
            id.setAttribute('class','done')
            id.setAttribute('state','done')

        }
    }
    


    return(
    <div className='add'>
        <div>
        <input 
            value={item.text}
            onChange={handleChange}
        /> 
        <button 
        onClick={handleClick}
        >ADD</button>
        </div>
        <h2>TODO</h2>

        <div className="list">

            {todos.map((todo,index)=>(
                <div key={index} className='todo' id={index} >
                    <input type="checkbox" 
                    value={todo.text}
                    checked={check.includes(index)}
                    onChange={()=>handleCheck(index)}
                    />
                    {todo.text}    
                </div>
                    
            )
                )
            }

        </div>



    </div>


    )
}

export default Add;