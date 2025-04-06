import React from 'react';
import useCounter from "../hooks/useCounter";
import useComments from "../hooks/useComments";

function MyInput() {

    const counter = useCounter((state:any) => state.counter);
    const incrCounter = useCounter((state:any) => state.incrCounter);


    const { data, error, isLoading } = useComments();
    console.log(data);

    return (
        <>
            <div><span>Hello</span> {counter}</div>
            <button onClick={incrCounter}>Increment</button>
            <input type="text"/>
        </>
    );
}

export default MyInput;