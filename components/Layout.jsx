import { AppShell, Box, Divider, Header, Title, Navbar, Stack, Text as MantineText, Code, Group, Button, useMantineTheme, createStyles } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import { BrandGithub } from 'tabler-icons-react';
import { MainLinks } from './MainLinks';
import { User } from './User';

export default function Layout({ children }) {
  const { classes } = useButtonStyles();
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
        <Header height={60} p="xs" style={{ width: '100%' }}>
          <Group style={{ width: '100%', justifyContent: 'space-between' }}>
            <Group align="center">
              <Title order={2}>Electa Api</Title>
              <Code mt={4}>v1.0.0</Code>
              <MantineText size="sm" mt={7}><i>Simple automated delegation</i></MantineText>
            </Group>
            <Group>
              <GithubButton className={classes.control}/>
            </Group>
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

function GithubButton({ style, ...others }) {
  const theme = useMantineTheme();
  const baseStyles = {
    border: 0,
    height: 42,
    paddingLeft: 10,
    paddingRight: 10,
  };
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      compact
      href="https://github.com/michaelballos/electa-"
      style={{ ...style, ...baseStyles }}
      color={theme.colorScheme === 'dark' ? 'gray' : 'black'}
      radius="lg"
      {...others}
    >
      <MarkGithubIcon size={24} />
    </Button>
  );
}
const useButtonStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 80,
    paddingBottom: 160,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  inner: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.dark[7],
    padding: 30,
    borderRadius: theme.radius.md,
    position: 'relative',
    overflow: 'hidden',
  },

  title: {
    color: theme.white,
    fontSize: 44,
  },

  description: {
    color: theme.white,
    lineHeight: 1.6,
  },

  control: {
    '@media (max-width: 960px)': {
      flex: 1,
    },
    padding: '0',
  },
}));