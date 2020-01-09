import React from "react"
const Counter:React.FunctionComponent<{}>=(props)=>{
    const [count,setCount]=React.useState(0);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
            <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
        </div>
    )
}

export default Counter;