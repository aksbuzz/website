/* eslint-disable prettier/prettier */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable no-var */
/* eslint-disable func-names */
import { Button, Container, Group, Image, Text } from '@mantine/core';
import { forwardRef } from 'react';

import { BORDERS } from '../constants/css';

const Navbar = forwardRef((props, ref) => {
  const { onLinkClick, refs } = props;

  return (
    <Container size="xl">
      <Group
        ref={ref}
        position="apart"
        spacing="xl"
        sx={{
          minHeight: '100px',
          width: '100%',
          background: 'tranparent',
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
          <Text
            sx={{
              color: 'white',
              '&:hover': {
                textDecoration: 'none',
                cursor: 'pointer',
                color: '#dad7cd',
              },
            }}
          >
            Careers
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
    </Container>
  );
});

export default Navbar;
