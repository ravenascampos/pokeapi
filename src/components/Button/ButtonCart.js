import React from "react";
import "./Button.css"

export function ButtonCart(){

    return(
        <>
            <div className="containerBtn">
                <button className="btnContinuar" type="button">Continuar Comprando</button>
                <Modal/>
            </div>
        </>
    );
}

export default ButtonCart;