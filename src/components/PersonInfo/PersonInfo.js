import s from './PersonInfo.module.css'

export const PersonInfo = ({name, age, className}) => {
    return (
        <p className={`${s.PersonInfo} ${className}`}>
            <span>{ name}, </span>
            <span>{ age} лет</span>
        </p>
    )
}
