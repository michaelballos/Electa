import styles from '../styles/login.module.css'
import { Button } from '@mantine/core'
import { useRouter } from 'next/router'

const LoginButtons = ({ opened, setOpened }) => {
  const { push: navigate } = useRouter()

  return (
    <div className={styles.loginBtn}>
      <Button className={styles.btnbtn} onClick={() => setOpened(true)}>
        Register
      </Button>
      <Button className={styles.btnbtn} onClick={() => navigate('/home')}>Login</Button>
    </div>
  )
}

export default LoginButtons
