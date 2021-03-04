import React from 'react';
import { Redirect } from 'react-router-dom';
import './Group.css';

function Group({ description, image, to }: { description?: string, image?: string, to: string }) {

    return (
        <div className="card-1 groups__group" onClick={() => <Redirect to={`/group?=${to}`} />}>
            <img alt={description} src={image} />
            <span>
                {description}
            </span>
        </div>
    );
}

export default Group;