import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/home.module.css'

export default function Home() {
  const { push: navigate } = useRouter()
  useEffect(() => {
    navigate('/home')
  }, [navigate])

  const cors = async (req, res) => {
    const { method } = req
    if (method === 'OPTIONS') {
      return res.status(200).send('YOGABAGABA')
    }
  }

  return (
    <div className={styles.container}>
    </div>
  )
}
