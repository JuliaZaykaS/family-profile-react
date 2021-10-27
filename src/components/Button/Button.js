import React from 'react'

export const Button = ({text, type, onClickBtn, disabled = false}) => {
    return (
        <button type={type} onClick={onClickBtn} disabled={disabled}>{ text }</button>
    )
}
