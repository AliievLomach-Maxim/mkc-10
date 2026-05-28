import styles from './Card.module.css'
import { AiFillEuroCircle } from 'react-icons/ai'
import { HiExclamation } from 'react-icons/hi'

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      <AiFillEuroCircle className={styles.icon} />
      <HiExclamation className={styles.icon} />
      <hr />
      {children}
    </div>
  )
}

export default Card
