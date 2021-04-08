import React,{ useEffect, useState } from "react";

export default function Count(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count+1)
        },1000);

        return ()=>clearInterval(timer)
    },[count])

    return <div>计数：{count}</div>
}