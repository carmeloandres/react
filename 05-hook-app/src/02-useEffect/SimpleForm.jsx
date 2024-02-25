import React from "react"
import {useState, useEffect} from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState,setFormState] = useState({
        username: 'strider',
        email:'carmeload@hotmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ] : value
        })
    }


/*    useEffect(() => {
        console.log('useEffect Called');
    },[]);

    useEffect(() => {
        console.log('formState Changed');
    },[formState]);

    useEffect(() => {
        console.log('email Changed');
    },[email]); */

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            /> 

            <input
                type="text"
                className="form-control mt-2"
                placeholder="carmeload@hotmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            /> 
            {
                (username === 'strider2') &&  <Message />
            }
                      

        </>
    )
}