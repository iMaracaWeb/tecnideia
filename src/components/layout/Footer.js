import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaWhatsapp />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTiktok />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Tecnideia</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer
