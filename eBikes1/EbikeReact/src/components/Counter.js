import React from 'react';
import {useRecoilState} from "recoil";
import {counterAtom} from "../globalState/atom";


export function Counter(){
    const [counter,setCounter] = React.useState(0);
    const [globalCounter, setglobalCounter] = useRecoilState(counterAtom);

    return (
        <div>
            <p>You clicked me {counter} number of times</p>
            <button onClick={()=>setCounter(counter+1)}>
                Click Me to change local counter value!
            </button>

            <p>Global state has changed {globalCounter} times</p>
            <button onClick={()=>setglobalCounter(globalCounter+1)}>
                Click Me to change global counter value!
            </button>

        </div>
        )

}

