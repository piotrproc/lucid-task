import React from 'react';
import useCounter from "../hooks/useCounter";

function MyInput() {

    const counter = useCounter((state:any) => state.counter);
    const incrCounter = useCounter((state:any) => state.incrCounter);

    return (
        <>
            <div><span>Hello</span> {counter}</div>
            <button onClick={incrCounter}>Increment</button>
            <input type="text"/>
        </>
    );
}

export default MyInput;