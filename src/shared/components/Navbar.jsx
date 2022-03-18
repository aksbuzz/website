/* eslint-disable prettier/prettier */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable no-var */
/* eslint-disable func-names */
import { BackgroundImage, Button, Group, Image, Text } from '@mantine/core';
import { useState, forwardRef, useEffect } from 'react';

import { BORDERS } from '../constants/css';
import { debounce } from '../utils/debounce';

import background from '../static/images/liquid-cheese.svg';

const Navbar = forwardRef((props, ref) => {
  const { onLinkClick, refs } = props;

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos
        // eslint-disable-next-line prettier/prettier
        && prevScrollPos - currentScrollPos > 70)
        || currentScrollPos < 10,
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Group
      ref={ref}
      position="apart"
      spacing="xl"
      sx={{
        padding: '0px 100px',
        minHeight: '100px',
        width: '100%',
        background: 'tranparent',
        borderBottom: BORDERS.BORDER,
        zIndex: '500',
        // position: 'fixed',
        transition: 'top 0.6s',
        top: visible ? '0' : '-100px',
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
