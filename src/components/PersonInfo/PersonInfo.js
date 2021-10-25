import React from 'react'

export const PersonInfo = ({name, age}) => {
    return (
        <p>
            <span>{ name}</span>,
            <span>{ age}</span>

        </p>
    )
}
