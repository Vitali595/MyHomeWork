import React from 'react'
import Message from "./Message";

function HW1() {
    const messageData = {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS884yE-aP3PQdStnZ7KZecX04EDdYa2YpRgQ&usqp=CAU',
        name: 'Vitali',
        message: 'some text',
        time: '20:00',
    }
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
