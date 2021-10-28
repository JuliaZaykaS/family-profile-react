import s from './PersonInfo.module.css'

export const PersonInfo = ({name, age}) => {
    return (
        <p className={s.PersonInfo}>
            <span>{ name},</span>
            <span>{ age}</span>
        </p>
    )
}
