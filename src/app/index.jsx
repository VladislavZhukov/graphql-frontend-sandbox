//core
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

//Components
import { Pet } from "./bus/pet/index";
import { Customer } from "./bus/customer/index";
import { Login } from "./bus/customer/login";

//other
import { client } from "./init/client";


export const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <Customer /> */}
      <Login />
      <Pet />
      
    </ApolloProvider>
  );
};
