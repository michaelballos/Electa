import styles from '../styles/login.module.css'
import { Button } from '@mantine/core'

const LoginButtons = ({ opened, setOpened }) => {
  return (
    <div className={styles.loginBtn}>
      <Button className={styles.btnbtn} onClick={() => setOpened(true)}>
        Register
      </Button>
      <Button className={styles.btnbtn}>Login</Button>
    </div>
  )
}

export default LoginButtons
