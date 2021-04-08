import React, {useEffect, useState,useRef} from "react";
import style from './css/first.css';
export default function Di(){  
   console.log(style);
    return (<div>
        <Tick/>
        <p>红红火火恍恍惚惚</p>
        <ToTop/>
        </div>
       
    );
    
}
function Clock(props){
    return (<div style = {{width:40,height:12000}}>
        <h1>Hello,world!</h1>
        <h2>现在是{props.data.toLocaleTimeString()}</h2>
        
    </div>);
}
function Tick(){
    const [time,settime] = useState();
    useEffect(()=>{
        var timer = setInterval(()=>{settime(new Date())},1000);
        return ()=>clearInterval(timer);
    })
    return (<div>
        <Clock data = {new Date()} />
        </div>);
}
function ToTop(props){
   
    const [isShow,changeDisplay] = useState(false);
    //防抖 在规定时间内指执行一次
    function debouce(fn,delay){
        var timer = null;
        if(timer)
            clearTimeout(timer);
        timer = setTimeout(fn,delay);
    }
    
    function throttle(fn,delay){
        let valid = true
        return function() {
           if(!valid){
               //休息时间 暂不接客
               return false 
           }
           // 工作时间，执行函数并且在间隔期内把状态位设为无效
            valid = false
            setTimeout(() => {
                fn()
                valid = true;
            }, delay)
        }
    }
    function showTop  () {
    
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    　　console.log('滚动条位置：' + scrollTop);
        if(scrollTop > 800){
           
            changeDisplay(true);
        }else{
            changeDisplay(false);
        }
    }
    window.onscroll  = throttle(showTop,1000);
    
    return (<div className = 'toTop'  style = {{display:isShow?'block':'none'}} onClick = {()=>{
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }}>
        回顶部
    </div>);
}
