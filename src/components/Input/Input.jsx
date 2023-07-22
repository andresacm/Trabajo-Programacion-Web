

import Styles from './Input.module.css'
const Input = ({namew, cambio, valor}) => {
    return (
        <div className={Styles.container}> 
            <label className={Styles.label}>{namew}</label>
            <input defaultValue={valor} type="text" className={Styles.input} onChange={cambio}></input>
        </div>
    )
}

export default Input