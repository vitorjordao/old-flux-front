import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { tokenStore } from './Auth';

interface Params {
    Component: (props: any) => JSX.Element; 
    permissions: string[]; 
    rest?: [];
}

function ProtectedRoute({Component, permissions, ...rest}: Params) {

    if(!tokenStore?.isValid) {
        window.location.replace('/Auth');
        return (<></>);
    }

    const permission = tokenStore?.authorization;

    return (
        <Route {...rest} render={(props)=>(
            permissions.includes("*") || permissions.includes(permission)
                ? <Component {...props} />
                : <Redirect to='/home' />
        
        )}/>
    );
}

export default ProtectedRoute;