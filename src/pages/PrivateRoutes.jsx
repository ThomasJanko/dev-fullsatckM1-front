import React from 'react'
import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "./localStorage";    

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route
        {...rest}
        render={(props) => {
            if (LocalStorageService.getAccessToken()) {
              return (
                <Component {...props} />
              );
            }
            return (
              <Redirect to="/login" />
            );
          }}
      />
    );
  };
  
  export default PrivateRoutes;
