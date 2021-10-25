import React from 'react'

export const Button = ({text, type, onClickBtn}) => {
    return (
        <button type={type} onClick={onClickBtn}>{ text }</button>
    )
}
