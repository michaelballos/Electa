import { useState } from 'react'
import styles from '../styles/login.module.css'
import {
  Input,
  Card,
  Button,
  Group,
  Stack,
  Checkbox,
  useMantineTheme,
  Modal,
  TextInput,
  Center,
} from '@mantine/core'
import { useMutation } from 'react-query'
import Register from '../components/Register'

const Login = () => {
  const [opened, setOpened] = useState(false)

  const mutation = useMutation(
    'login',
    () => {
      return fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: '',
          password: '',
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            throw new Error(res.error)
          }
          return res
        })
    },
    {
      onSuccess: (data) => {
        console.log('got data', data)
      },
    }
  )
  const theme = useMantineTheme()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]

  return (
    <Center
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ width: 340, margin: 'auto' }}>
        <Card shadow='sm' p='lg'>
          <Register />
          <Group>
            <Button onClick={() => setOpened(true)}>Register</Button>
          </Group>
        </Card>
      </div>
    </Center>
  )
}

export default Login
