import React from "react";
import { useCustomerAuth } from "./hooks/useCustomerAuth";

export const Login = () => {
    const { handleChange, logIn, authorizedCustomer } = useCustomerAuth()

    const authorizedCustomerJSX = authorizedCustomer && (
        <>
            <p>authorized Customer: {authorizedCustomer.customer.name}</p>
        </>
    )

    return (
        <>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" onChange={handleChange} />
            <input type="text" placeholder="password" name="password" onChange={handleChange} />
            <button type="submit" onClick={logIn} >Login</button>
            {authorizedCustomerJSX}
        </>
    )

}