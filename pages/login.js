<<<<<<< HEAD
import React, { useState } from "react";
import { Card, Center } from "@mantine/core";
import Register from "../components/Register";
import LoginUI from "../components/LoginUI";
import LoginButtons from "../components/LoginButtons";
=======
import React, { useState } from 'react'
import { Card, Button, Center, Container, Title } from '@mantine/core'
import Register from '../components/Register'
import LoginUI from '../components/LoginUI'
import LoginButtons from '../components/LoginButtons'
>>>>>>> cdf071d7734b0eef8fab7bc0fdb59a29b339b9fe

/**
 * the login page and register form
 * @returns {React.ReactElement} Login - login route
 */
const Login = () => {
  const [opened, setOpened] = useState(false);

  return (
<<<<<<< HEAD
    <Center
      style={{
        width: "100%",
        height: "100%",
      }}
=======
    <Container
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[7],
      })}
      fluid
      style={{ height: '100vh' }}
>>>>>>> cdf071d7734b0eef8fab7bc0fdb59a29b339b9fe
    >
      <Center
        style={{
          width: 340,
          margin: "auto",
        }}
      >
<<<<<<< HEAD
        <Card shadow="sm" p="lg">
          <LoginUI />
          <Register opened={opened} setOpened={setOpened} />
          <LoginButtons opened={opened} setOpened={setOpened} />
        </Card>
      </div>
    </Center>
  );
};
=======
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
>>>>>>> cdf071d7734b0eef8fab7bc0fdb59a29b339b9fe

export default Login;
