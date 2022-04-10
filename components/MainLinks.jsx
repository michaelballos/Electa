import React, { useCallback } from 'react'
import {
  GitPullRequest,
  AlertCircle,
  Messages,
  Database,
  Home,
  ArrowForward,
} from 'tabler-icons-react'
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core'
import { useRouter } from 'next/router'

function MainLink({ icon, color, label, url }) {
  const { push: navigate } = useRouter()

  const handleNavigate = useCallback(() => {
    navigate(url)
  }, [navigate, url])

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      onClick={handleNavigate}
    >
      <Group>
        <ThemeIcon color={color} variant='light'>
          {icon}
        </ThemeIcon>

        <Text size='sm'>{label}</Text>
      </Group>
    </UnstyledButton>
  )
}

const data = [
  { icon: <Home size={16} />, color: 'blue', label: 'Dashboard', url: '/' },
  {
    icon: <ArrowForward size={16} />,
    color: 'teal',
    label: 'Login',
    url: '/login',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-info-circle'
        width='17'
        height='17'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='#00bfd8'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <circle cx='12' cy='12' r='9' />
        <line x1='12' y1='8' x2='12.01' y2='8' />
        <polyline points='11 12 12 12 12 16 13 16' />
      </svg>
    ),
    color: 'teal',
    label: 'Docs',
    url: '/docs',
  },
]

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />)
  return <div>{links}</div>
}
