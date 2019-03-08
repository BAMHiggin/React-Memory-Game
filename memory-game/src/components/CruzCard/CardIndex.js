import React from "react";
import "./CardStyle.css";

function CruzCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default CruzCard;