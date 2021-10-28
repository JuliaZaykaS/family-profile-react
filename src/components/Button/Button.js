// import s from './Button.module.css'
import './Button.module.css'

export const Button = ({text, type, onClickBtn, className}) => {
    return (
        <button className={className} type={type} onClick={onClickBtn}>{ text }</button>
    )
}
