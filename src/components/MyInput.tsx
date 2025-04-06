import {TextField} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import useCounter from "../hooks/useCounter";
import useAutocompleteOptions from "../hooks/useAutocompleteOptions";

function MyInput() {

    const counter = useCounter((state:any) => state.counter);
    const incrCounter = useCounter((state:any) => state.incrCounter);

    const { data:options, error, isLoading } = useAutocompleteOptions("asd");
    console.log(options);

    if(!options) return <></>;

    return (
        <>
            <div><span>Hello</span> {counter}</div>
            <button onClick={incrCounter}>Increment</button>
            <input type="text"/>
            <Autocomplete
                getOptionLabel={(option) => option.word || ""}
                disablePortal
                options={options}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </>
    );
}

export default MyInput;