import React from 'react';
import useCounter from "../hooks/useCounter";
import useAutocompleteOptions from "../hooks/useAutocompleteOptions";

function MyInput() {

    const counter = useCounter((state:any) => state.counter);
    const incrCounter = useCounter((state:any) => state.incrCounter);


    const { data, error, isLoading } = useAutocompleteOptions("asd");
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