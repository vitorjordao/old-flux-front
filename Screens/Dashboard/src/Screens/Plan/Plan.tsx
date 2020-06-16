import React from 'react';
import {
    useLocation
} from "react-router-dom";

function Plan() {

    const query = new URLSearchParams(useLocation().search);

    const expired = query.get('expired') === 'true' ? true : false;

    console.log(expired);

    return (
        <section>
            Plan
        </section>
    );
}

export default Plan;