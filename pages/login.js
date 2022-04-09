import { useState } from 'react'
import styles from '../styles/login.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import {
  Title,
  Input,
  Card,
  Button,
  Group,
  Stack,
  useMantineTheme,
  Modal,
  TextInput,
} from '@mantine/core'
import { At } from 'tabler-icons-react'
import { useMutation } from 'react-query'

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
    <>
      <div className={styles.loginContainer}>
        <div style={{ width: 340, margin: 'auto' }}>
          <Card shadow='sm' p='lg'>
            <Modal
              centered
              opened={opened}
              onClose={() => setOpened(false)}
              title='Register with us!'
            >
              <Group>
                <TextInput
                  style={{
                    padding: '.2rem',
                  }}
                  placeholder='Enter your first name'
                  label='First Name'
                  required
                />
                <TextInput
                  style={{
                    padding: '.2rem',
                  }}
                  placeholder='Enter your last name'
                  label='Last Name'
                  required
                />
              </Group>
              <Stack>
                <TextInput
                  style={{
                    paddingTop: '.8rem',
                    paddingRight: '0.2rem',
                    paddingLeft: '0.2rem',
                  }}
                  centered
                  placeholder='Enter your email'
                  error=''
                  label='Email'
                  icon={<At size={14} color={secondaryColor} />}
                  required
                />
                <TextInput
                  style={{
                    paddingRight: '0.2rem',
                    paddingLeft: '0.2rem',
                  }}
                  placeholder='Enter your magic phrase'
                  label='Password'
                  required
                />
              </Stack>
            </Modal>
            <Group position='center'>
              <Button onClick={() => setOpened(true)}>Register</Button>
            </Group>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Login
