

import Styles from './Input.module.css'
const Input = ({namew, cambio}) => {
    return (
        <div className={Styles.container}> 
            <label className={Styles.label}>{namew}</label>
            <input type="text" className={Styles.input} onChange={cambio}></input>
        </div>
    )
}

export default Input