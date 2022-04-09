import React, { useCallback } from 'react';
import { GitPullRequest, AlertCircle, Messages, Database, Home, ArrowForward } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { useRouter } from 'next/router';

function MainLink({ icon, color, label, url }) {
  const { push: navigate } = useRouter();
  
  const handleNavigate = useCallback(() => {
    navigate(url);
  }, [navigate, url]);

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
      onClick={handleNavigate}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <Home size={16} />, color: 'blue', label: 'Home', url: '/' },
  { icon: <ArrowForward size={16} />, color: 'teal', label: 'Login', url: '/login' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}