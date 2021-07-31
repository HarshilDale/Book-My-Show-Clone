import React from "react";

export const PrevArrow = (props) => {
    return (
     <>
    <div
        className={props.className}
        Style={{...props.style , backgroundColor:"black"}}
        onClick={props.onClick}
        />;
    </>
    );
};

export const NextArrow = (props) => {
    return (
    <>
    <div
    className={props.className}
    Style={{...props.style , backgroundColor:"black"}}
    onClick={props.onClick}
    />;
    </>
    );
};
