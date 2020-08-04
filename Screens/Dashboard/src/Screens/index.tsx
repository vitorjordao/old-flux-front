import React from 'react';
import './Screen.css';
import 'Design_Thinking/css/header.css';
import 'Design_Thinking/css/footer.css';
import OpenButton, { OpenButtonTypes } from '../Components/OpenButton';
import { useHistory } from "react-router-dom";

interface Params {
    Component: (props: any) => JSX.Element;
    rest?: [];
}

function Screens({ Component, ...rest }: Params) {
    const history = useHistory();

    return (
        <>
            <header className="main-header">
                <OpenButton onClick={history.goBack} type={OpenButtonTypes.openButton1} icon="fas fa-chevron-left"/>
                <picture className="logo">
                    <source media="(min-width:650px)" srcSet="" />
                    <source media="(min-width:465px)" srcSet="" />
                    <img src="" alt="Flux Price Comparator" style={{ width: "auto" }} />
                </picture>
                <OpenButton onClick={() => history.push("/user")} type={OpenButtonTypes.openButton1} icon="fas fa-user"/>
            </header>
            <main className="main-content">
                <Component {...rest} />
            </main>
            <footer className="main-footer">
                Todos os direitos reservados
            </footer>
        </>
    );
}

export default Screens;