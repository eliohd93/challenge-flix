import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css"
import logo from "./logo-alura.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera(){
    return(

       <header className={styles.Cabecera}>
        <Link to="/">
       
         <section className={styles.logoContainer}>
            <img src={logo} alt="Logo Alura"/> <span>Cinema</span>

         </section>
         </Link>

         <nav>
            <CabeceraLink url= "./">
              Home
            </CabeceraLink>
         </nav>

         <nav>
            <CabeceraLink url= "./Favoritos">
              Favoritos
            </CabeceraLink>
         </nav>
        


       </header> 

    )
}

export default Cabecera; 