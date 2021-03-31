import React from 'react'
import s from './Message.module.css'

export type messageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataPropsType) {
    return (
        <div>
            <img src={props.avatar}/>
            <div className={s.message}>
                <div className={s.messageIn}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.messageColor}>
                        {props.message}
                    </div>
                    <div className={s.time}>
                        {props.time}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Message
