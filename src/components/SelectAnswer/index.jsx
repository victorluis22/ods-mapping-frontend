import React from "react";
import './style.css'

const SelectAnswer = ({getAnswers, index, opA, opB, opC, opD, opE}) => {
    return(
        <div className="SelectAnswer">
            <select className="form-select" aria-label="Default select example" onChange={(e) => getAnswers(e.target.value, index)}>
                <option value={0} defaultValue>Selecione sua resposta</option>
                <option value={1}>{opA}</option>
                <option value={2}>{opB}</option>
                <option value={3}>{opC}</option>
                <option value={4}>{opD}</option>
                <option value={5}>{opE}</option>
            </select>
        </div>
    )
}

export default SelectAnswer