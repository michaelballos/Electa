import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'tabler-icons-react'
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  Stack,
  useMantineTheme,
} from '@mantine/core'

export function User() {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
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
        }}
      >
        <Group>
          <Avatar radius='xl' />
          <Box sx={{ flex: 1 }}>
            <Text size='sm' weight={500}>
              Admin User
            </Text>
            <Text color='dimmed' size='xs'>
              thisisatestemail@gmail.com
            </Text>
          </Box>

          {theme.dir === 'ltr' ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </Group>
      </UnstyledButton>
    </Box>
  )
}
