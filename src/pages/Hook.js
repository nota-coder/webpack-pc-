import React, { useState } from 'react';
export default function Hook(){
    const [text,setText] = useState("点击前");
    return(
        <div onClick = {()=>setText("点击后")}>
            {text}
        </div>
    )
}