import React from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";

class TokenStore {
    private _token: string = "";
    private _expireDate: Date = new Date();
    private _expired: boolean = true;
    private _isValid: boolean = false;
    private _authorization: string = "free";

    constructor(token: string) {
        this._token = token;
    }

    async valid() {
        const response = await fetch('http://localhost:3000/user/validtoken', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: this._token,
            }),
        });

        const body: {message?: string, plan?: {type: string, expire: string}} = await response.json();

        const expireDate = new Date(body.plan?.expire || new Date());

        this._expireDate = expireDate;

        this._expired = expireDate < new Date();
        
        this._isValid = response.status === 202;

        this._authorization = body?.plan?.type? body?.plan?.type : "free"

        if(!this._isValid){
            alert(body.message);
        }

    }

    get token() {
        return this._token;
    }

    get isValid() {
        return this._isValid;
    }

    get authorization() {
        return this._authorization;
    }

    get expireDate() {
        return this._expireDate;
    }

    get expired() {
        return this._expired;
    }
}

export let tokenStore: null | TokenStore = null;

function Routes() {

    const history = useHistory();

    const query = new URLSearchParams(useLocation().search);

    if(history.location.pathname === "/") {

        const token = query.get('jwt');
    
        if (!token) {
            alert("Token vasio!\nAcesso negado!");
            window.location.replace('/Auth');
            return <></>;
        }
    
        tokenStore = new TokenStore(token);
        tokenStore.valid().then(() => {
            if (!!!tokenStore?.isValid) {
                window.location.replace('/Auth');
                return;
            }

            if(tokenStore.expired) {
                history.push("/plans?expired=true");
            }
    
            if (tokenStore.authorization === "free") {
                history.push("/plans");
            } else {
                history.push("/home");
            }
        });

    }

    return (
        <></>
    );
}


export default Routes;
