import s from './ChildrenItem.module.css'

// export const ChildrenItem = ({ children, className }) => {
export const ChildrenItem = ({ children}) => {

    return (
        // <li className={`${s.ChildrenItem} ${className}`}>
        <li className={s.ChildrenItem}>
            {children}
        </li>
    )
}
