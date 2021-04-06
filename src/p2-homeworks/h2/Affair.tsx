import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    let priorityClassName;
    if (props.affair.priority === "high") {
        priorityClassName = s.high
    }
    if (props.affair.priority === "low") {
        priorityClassName = s.low
    }
    if (props.affair.priority === "middle") {
        priorityClassName = s.middle
    }

    return (
        <div className={s.name}>
            {/*<span className={priorityClassName}>*/}
            {props.affair.name}
            {/*</span>*/}

            <span className={s.allClassName}>
                 <span className={priorityClassName}>[{props.affair.priority}]</span>
            </span>
            <span className={s.buttonName}>
                   <button className={s.littleButton} onClick={deleteCallback}>X</button>
                </span>
        </div>
    )
}

export default Affair
