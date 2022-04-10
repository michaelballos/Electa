import React, { useState } from 'react'
import { Card, Button, Center, Container, Title } from '@mantine/core'
import Register from '../components/Register'
import LoginUI from '../components/LoginUI'
import LoginButtons from '../components/LoginButtons'

/**
 * the login page and register form
 * @returns {React.ReactElement} Login - login route
 */
const Login = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Container
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[7],
      })}
      fluid
      style={{ height: '100vh' }}
    >
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
          <Card size="lg" shadow='xl' p='lg'>
            <Title order={2}>
              Login
            </Title>
            <LoginUI />
            <Register opened={opened} setOpened={setOpened} />
            <LoginButtons opened={opened} setOpened={setOpened} />
          </Card>
        </div>
      </Center>
    </Container>
  )
}

export default Login;
