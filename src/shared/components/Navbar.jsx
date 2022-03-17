import { Button, Group, Image, Text } from '@mantine/core';
import { forwardRef } from 'react';

import { BORDERS } from '../constants/css';

const Navbar = forwardRef((props, ref) => {
  const { onLinkClick, refs } = props;
  return (
    <Group
      ref={ref}
      position="apart"
      spacing="xl"
      sx={{
        padding: '0px 100px',
        minHeight: '100px',
        background: 'transparent',
        borderBottom: BORDERS.BORDER,
      }}
    >
      <Image radius="xs" withPlaceholder width={200} height={50} />
      <Group position="apart" sx={{ gap: '40px' }}>
        <Text
          onClick={() => onLinkClick(refs.home)}
          sx={{
            color: 'white',
            transition: 'all 0.2s ease',
            '&:hover': {
              textDecoration: 'none',
              cursor: 'pointer',
              color: '#dad7cd',
            },
          }}
        >
          Home
        </Text>
        <Text
          onClick={() => onLinkClick(refs.services)}
          sx={{
            color: 'white',
            '&:hover': {
              textDecoration: 'none',
              cursor: 'pointer',
              color: '#dad7cd',
            },
          }}
        >
          Services
        </Text>
        <Text
          onClick={() => onLinkClick(refs.about)}
          sx={{
            color: 'white',
            '&:hover': {
              textDecoration: 'none',
              cursor: 'pointer',
              color: '#dad7cd',
            },
          }}
        >
          About
        </Text>
        <Text
          onClick={() => onLinkClick(refs.contact)}
          sx={{
            color: 'white',
            '&:hover': {
              textDecoration: 'none',
              cursor: 'pointer',
              color: '#dad7cd',
            },
          }}
        >
          Contact
        </Text>
        <Button
          sx={{
            background: '#1b4332',
            '&:hover': {
              background: '#1b4332cc',
            },
          }}
          size="md"
        >
          CTA Button
        </Button>
      </Group>
    </Group>
  );
});

export default Navbar;
