import React,{ useEffect, useRef } from "react";

export default function Ref(){
    const box = useRef(null)
    useEffect(()=>{
        console.log(box.current)
    },[])
    return <div ref = {box}>this is a box</div>
}