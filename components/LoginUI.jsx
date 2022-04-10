import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { useMantineTheme, TextInput, Center, PasswordInput } from '@mantine/core'
import { useMutation } from 'react-query'
import { At, Lock } from 'tabler-icons-react'

const LoginUI = () => {
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
      />
      <PasswordInput
        style={{
          paddingTop: '0.4rem',
          paddingRight: '0.2rem',
          paddingLeft: '0.2rem',
        }}
        placeholder='Enter your magic phrase'
        label='Password'
        icon={
          <Lock size={14} />
        }
      />
    </>
  )
}

export default LoginUI
