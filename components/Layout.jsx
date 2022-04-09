import { AppShell, Box, Divider, Header, Title, Navbar, Stack, Text as MantineText } from '@mantine/core';
import { MainLinks } from './MainLinks';
import { User } from './User';

export default function Layout({ children }) {
  return (
    <AppShell
      sx={{
        height: '100vh',
      }}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        body: {
          height: 'calc(100vh - 60px)',
        },
      })}
      padding="md"
      navbar={
        <Navbar
          width={{ base: 300 }}
          height={500}
          p="xs"
          styles={{
            root: {
              height: 'calc(100vh - 60px)',
            }
          }}
        >
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Stack>
            <Title>Electa API</Title>
            <MantineText>Automating delegation</MantineText>
          </Stack>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
