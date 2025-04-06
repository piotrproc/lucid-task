import './App.css'
import {BsFillCalendar2CheckFill} from "react-icons/bs";
import {useEffect, useRef} from "react";
import MyInput from "./components/MyInput";

function App() {

    const nameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        nameRef.current?.focus();
    },[]);

    return (
        <>
            <BsFillCalendar2CheckFill color="red" size="40"/>
            <p>Hello World</p>
            {/*<input ref={nameRef} id="name" placeholder="Username"*/}
            {/*       onChange={(e) => console.log(e.target.value)}/>*/}
            <MyInput />
        </>
    )
}

export default App
