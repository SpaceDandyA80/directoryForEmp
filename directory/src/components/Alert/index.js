import React from "react";

function Alert (props) {
    return (
        <div role="alert" className={`alert alert-${props.type} `}>
            {props.children}
        </div>
    )
}
export default Alert;