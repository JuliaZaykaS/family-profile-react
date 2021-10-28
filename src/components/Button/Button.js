import React from 'react'

// export const Button = ({text, type, onClickBtn, disabled = false}) => {
export const Button = ({text, type, onClickBtn}) => {
    return (
        // <button type={type} onClick={onClickBtn} disabled={disabled}>{ text }</button>
        // <button type={type} onClick={onClickBtn}>{ text }</button>
        <button type={type} onClick={onClickBtn}>{ text }</button>
    )
}
