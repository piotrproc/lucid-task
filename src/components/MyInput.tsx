import {TextField} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, {useState} from 'react';
import useCounter from "../hooks/useCounter";
import useAutocompleteOptions from "../hooks/useAutocompleteOptions";

function MyInput() {

    const [inputValue, setInputValue] = useState("");

    const counter = useCounter((state:any) => state.counter);
    const incrCounter = useCounter((state:any) => state.incrCounter);

    const { data:options, error, isLoading }  = useAutocompleteOptions(inputValue);

    return (
        <>
            <div><span>Hello</span> {counter}</div>
            <button onClick={incrCounter}>Increment</button>
            <input type="text" name="foo"/>
            <Autocomplete
                onInputChange={(_, newValue) => setInputValue(newValue)}
                getOptionLabel={(option) => option.word || ""}
                options={options || []}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </>
    );
}

export default MyInput;