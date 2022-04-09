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
  Checkbox,
  useMantineTheme,
  Modal,
  TextInput,
  Center,
} from '@mantine/core'
import { At, icon } from 'tabler-icons-react'
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
                  icon={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='icon icon-tabler icon-tabler-lock-off'
                      width='15'
                      height='15'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='#2c3e50'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <line x1='3' y1='3' x2='21' y2='21' />
                      <path d='M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4m4 0h2a2 2 0 0 1 2 2v2' />
                      <circle cx='12' cy='16' r='1' />
                      <path d='M8 11v-3m.712 -3.278a4 4 0 0 1 7.288 2.278v4' />
                    </svg>
                  }
                  required
                />
                <TextInput
                  style={{
                    paddingRight: '0.2rem',
                    paddingLeft: '0.2rem',
                  }}
                  placeholder='Enter your magic phrase'
                  label='Require Password'
                  icon={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='icon icon-tabler icon-tabler-lock-off'
                      width='15'
                      height='15'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='#2c3e50'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <line x1='3' y1='3' x2='21' y2='21' />
                      <path d='M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4m4 0h2a2 2 0 0 1 2 2v2' />
                      <circle cx='12' cy='16' r='1' />
                      <path d='M8 11v-3m.712 -3.278a4 4 0 0 1 7.288 2.278v4' />
                    </svg>
                  }
                  required
                />
                <Checkbox size='xs' label='Save Magic Phrase' />
              </Stack>
              <Group>
                <Center
                  style={{
                    width: '100%',
                  }}
                >
                  <Button variant='subtle' size='md'>
                    Register
                  </Button>
                </Center>
              </Group>
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
