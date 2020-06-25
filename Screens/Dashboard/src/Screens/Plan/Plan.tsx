import React from 'react';
import {
    useLocation
} from "react-router-dom";
import './Plan.css';
import { useHistory } from "react-router-dom";

function Plan() {

    const history = useHistory();

    const query = new URLSearchParams(useLocation().search);

    const expired = query.get('expired') === 'true' ? true : false;

    return (
        <section className="content">
            <h1>Adquira já o plano que levará sua empresa para o próximo nível!</h1>
            <div className="plan card-1">
                <header className="plan__header"><h3>Próximo nível</h3></header>
                <main className="main-content plan__main">
                    <ul>
                        <li>Rasterar até 100 produtos!</li>
                        <li>Acesso a API REST para integrar diretamente ao seu e-commerce!</li>
                        <li>Gráficos exclusivos sobre variações de preços!</li>
                    </ul>
                    <div className="plan__value"><span className="plan__value__price">R$ 150,00</span> p/ mês</div>
                    <button className="open-button-1 plan__main__button" onClick={() => alert("Implementar!")}>Adquirir!</button>
                </main>
            </div>
            {
                !expired && <a className="open-button-2 content__ignore" onClick={() => history.push("/home")}>Continuar com o plano gratuito</a>
            }

        </section>
    );
}

export default Plan;