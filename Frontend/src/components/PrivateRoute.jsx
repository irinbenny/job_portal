import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // Check if user is authenticated, if not, redirect to login page
    const isAuthenticated = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;
