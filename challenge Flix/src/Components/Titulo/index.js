import styles from "./Titulo.module.css"

function Titulo({children}){

    return(
        <div classname={styles.text}>

            {children}
        </div>
    )
}

export default Titulo