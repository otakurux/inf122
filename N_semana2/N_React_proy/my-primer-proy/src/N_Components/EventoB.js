import React from "react";
import "../N_Styles/Evento.css";

function EventoB(props) {
    return (
        <div className="card-container">

            <img className="card-image"
                src={props.image}
                alt="Foto del evento" />


            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dateLiteral}</p>
                <p className="card-place">{props.placeLiteral}</p>
                <p className="card-description">{props.description}</p>
            </div>
            <div className="links">
                <figure>
                    <a className="card-link" href={props.link}><img className="card-icon" src={props.icon} /></a>
                </figure>
                <figure>
                    <a className="card-link" href={props.link}><img className="card-icon" src={props.icon} /></a>
                </figure>
                <figure>
                    <a className="card-link" href={props.link}><img className="card-icon" src={props.icon} /></a>
                </figure>
            </div>
        </div>
    );
}

export default EventoB;