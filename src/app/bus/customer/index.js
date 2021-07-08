import React from "react";
import { useCustomerCreator } from "./hooks/useCustomerCreator";

export const Customer = () => {
    const { handleChange, save, createdAccount } = useCustomerCreator();

    const customerJSX = createdAccount && (
        <p>
            We already created account with name: {createdAccount.name}
        </p>
    )

    return (
        <>
            <h1>Registration</h1>
            <input type="text" placeholder="name" name="name" onChange={handleChange} />
            <input type="text" placeholder="username" name="username" onChange={handleChange} />
            <input type="text" placeholder="password" name="password" onChange={handleChange} />
            <button type="submit" onClick={save}>Save</button>
            {customerJSX}
        </>
    )
};