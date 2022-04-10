import React, { useState } from 'react'
import { Card, Button, Center } from '@mantine/core'
import Register from '../components/Register'
import LoginUI from '../components/LoginUI'
import LoginButtons from '../components/LoginButtons'

const Login = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Center
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            width: 340,
            margin: 'auto',
          }}
        >
          <Card shadow='sm' p='lg'>
            <LoginUI />
            <Register opened={opened} setOpened={setOpened} />
            <LoginButtons opened={opened} setOpened={setOpened} />
          </Card>
        </div>
      </Center>
    </>
  )
}

export default Login
