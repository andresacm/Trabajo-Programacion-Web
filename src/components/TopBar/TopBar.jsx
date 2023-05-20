import Styles from './TopBar.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'

const TopBar = () => {

    return (
        <div className={Styles.container}> 
            <div className={Styles.C1}>
                <button style={{border: 'none'}}><AiOutlineMenu style={{cursor: 'pointer'}} size={25}/></button>
            </div>
            <div className={Styles.C2}>
                <h5 className={Styles.h5}>Atención Citas</h5>
            </div>
            <div className={Styles.C3}>
            <button style={{border: 'none'}}><BsPersonCircle style={{cursor: 'pointer'}} size={25}/></button>
            </div>
        </div>
    )
}

export default TopBar