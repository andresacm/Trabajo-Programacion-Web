import Styles from './TopBar.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
    
const TopBar = ({onButtonClick}) => {

    const router = useRouter()

    function handleOnClick()
    {
        router.push("/pantalla_perfil")
    }
    
    return (
        <div className={Styles.container}> 
            <div className={Styles.C1}>
                <button style={{border: 'none'}} onClick={onButtonClick}><AiOutlineMenu style={{cursor: 'pointer'}} size={25}/></button>
            </div>
            <div className={Styles.C2}>
                <h5 className={Styles.h5}>Atención Citas</h5>
            </div>
            <div className={Styles.C3}>
            <button onClick={handleOnClick} style={{border: 'none'}}><BsPersonCircle style={{cursor: 'pointer'}} size={25}/></button>
            </div>
        </div>
    )
}

export default TopBar