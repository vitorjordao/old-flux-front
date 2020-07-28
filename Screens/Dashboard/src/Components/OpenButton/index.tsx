import React from 'react';

export enum OpenButtonTypes {
    openButton1 = "open-button-1",
    openButton2 = "open-button-2",
}

export interface Props {
    children?: string | JSX.Element;
    type: OpenButtonTypes;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    icon?: string;
}

export default function OpenButton({
    children,
    type = OpenButtonTypes.openButton1,
    className,
    onClick,
    icon
}: Props) {

    return (
        <button className={`${type} ${className}`} onClick={onClick}>{icon && <i className={icon} />} {children}</button>
    );
}