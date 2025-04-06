import {TextField} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, {useState} from 'react';
import useAutocompleteOptions from "../hooks/useAutocompleteOptions";

function MyInput() {

    const [inputValue, setInputValue] = useState("");

    const { data:options, error, isLoading }  = useAutocompleteOptions(inputValue);

    return (
        <>
            <Autocomplete
                multiple
                onInputChange={(_, newValue) => setInputValue(newValue)}
                getOptionLabel={(option) => option.word || ""}
                getOptionSelected={(option, value) => option.score === value.score }
                options={options || []}
                renderInput={(params) => <TextField {...params} label="Autocomplete" />}
            />
        </>
    );
}

export default MyInput;