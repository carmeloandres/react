import React from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    // utilizamos el hook useForm, obteniendo el los datos del formulario , la etructura completa del
    // formulario, formState y el onInputChange
    // con el initialValue propio del formulario
    const { formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email:'',
        password:''

    });

   
    return (
        <>
            <h1>Formulario con Custom Hook</h1>
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
                      

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            /> 
            <button onClick= { onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}