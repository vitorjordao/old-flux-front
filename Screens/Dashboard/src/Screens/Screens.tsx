import React from 'react';
import './Screen.css';
import 'Design_Thinking/css/header.css';
import 'Design_Thinking/css/footer.css';

interface Params {
    Component: (props: any) => JSX.Element;
    rest?: [];
}

function Screens({ Component, ...rest }: Params) {

    return (
        <>
            <header className="main-header">
                <a className="open-button-1"><i className="fas fa-chevron-left"></i></a>
                <picture className="logo">
                    <source media="(min-width:650px)" srcSet="" />
                    <source media="(min-width:465px)" srcSet="" />
                    <img src="" alt="Flux Price Comparator" style={{ width: "auto" }} />
                </picture>
                <button className="open-button-1"><i className="fas fa-user"></i></button>
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