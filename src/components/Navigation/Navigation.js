import React from 'react'
import { Button } from '../Button/Button'
// import {NavLink} from 'react-router-dom'

// export const Navigation = () => {
//     return (
//         <nav>

//         <NavLink
//         exact
//         to="/form"
//         // className={s.navLink}
//         // activeClassName={s.navLinkActive}
//       >
//         Форма
//       </NavLink>
//       <NavLink
//         to="/preview"
//         // className={s.navLink}
//         // activeClassName={s.navLinkActive}
//       >
//         Превью
//       </NavLink>
//         </nav>
//     )
// }
export const Navigation = (props) => {
    const {onBtnClick } = props
    // const {onBtnPreviewClick, onBtnFormClick } = props
    // const onBtnFormClick = e => {

    // }

    // const onBtnPreviewClick = e => {

    // }
    return (
        <nav>
            <ul>
                <li>
                   {/* <Button type={'button'} text={'Форма'} onClickBtn={onBtnFormClick}/> */}
                   <Button type={'button'} text={'Форма'} onClickBtn={onBtnClick}/>
                    </li>
                <li>
                   <Button type={'button'} text={'Превью'} onClickBtn={onBtnClick}/>
                    </li>
            </ul>
        </nav>
    )
}
