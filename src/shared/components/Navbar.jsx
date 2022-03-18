/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable no-var */
/* eslint-disable func-names */
import { useState, forwardRef } from 'react';
import { Button, Collapse, Container, Divider, Group, Image, Text } from '@mantine/core';
import { useMediaQuery, useScrollLock } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';

import { BORDERS } from '../constants/css';

const Navbar = forwardRef((props, ref) => {
  const { onLinkClick, refs } = props;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [scrollLocked, setScrollLocked] = useScrollLock();
  const location = useLocation();
  const mobile = useMediaQuery('(max-width: 576px)');
  const tablet = useMediaQuery('(min-width: 860px)');

  return (
    <Container size="xl">
      <Group
        ref={ref}
        position="apart"
        spacing="xl"
        sx={{
          minHeight: mobile ? '70px' : '100px',
          width: '100%',
          background: 'tranparent',
          borderBottom: BORDERS.BORDER,
        }}
      >
        <Image radius="xs" withPlaceholder width={mobile ? 150 : 200} height={50} />
        <Collapse in={open} sx={{ zIndex: open ? '100' : '-1' }}>
          <Group
            direction="column"
            sx={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              height: '100vh',
              width: '100%',
              background: 'white',
              paddingTop: '70px',
              gap: '0px',
            }}
          >
            <Divider sx={{ minWidth: '100%' }} />
            <Text
              size="lg"
              pt="10px"
              pb="10px"
              pl="10px"
              onClick={() => {
                navigate('/');
                setOpen(false);
                setScrollLocked((c) => !c);
              }}
            >
              Home
            </Text>
            <Divider sx={{ minWidth: '100%' }} />
            {!location.pathname.includes('careers') && (
            <>
              <Text
                size="lg"
                pt="10px"
                pb="10px"
                pl="10px"
                onClick={() => {
                  onLinkClick(refs.services);
                  setOpen(false);
                  setScrollLocked((c) => !c);
                }}
              >
                Services

              </Text>
              <Divider sx={{ minWidth: '100%' }} />
            </>
            )}
            {!location.pathname.includes('careers') && (
            <>
              <Text
                size="lg"
                pt="10px"
                pb="10px"
                pl="10px"
                onClick={() => {
                  onLinkClick(refs.about);
                  setOpen(false);
                  setScrollLocked((c) => !c);
                }}
              >
                About

              </Text>
              <Divider sx={{ minWidth: '100%' }} />
            </>
            )}
            <Text
              size="lg"
              pt="10px"
              pb="10px"
              pl="10px"
              onClick={() => {
                onLinkClick(refs.contact);
                setOpen(false);
                setScrollLocked((c) => !c);
              }}
            >
              Contact

            </Text>
            <Divider sx={{ minWidth: '100%' }} />
            <Text
              size="lg"
              pt="10px"
              pb="10px"
              pl="10px"
              onClick={() => {
                navigate('/careers');
                setOpen(false);
                setScrollLocked((c) => !c);
              }}
            >
              Careers

            </Text>
          </Group>
        </Collapse>
        {tablet ? (
          <Group position="apart" sx={{ gap: '40px' }}>
            <Text
              onClick={() => navigate('/')}
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
            {!location.pathname.includes('careers') && (
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
            )}

            {!location.pathname.includes('careers') && (
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
            )}
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
              onClick={() => navigate('/careers')}
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
        ) : (
          open ? (
            <MdClose
              color="black"
              style={{ zIndex: '101' }}
              size={40}
              onClick={() => {
                setOpen(false);
                setScrollLocked((c) => !c);
              }}
            />) : (
              <MdMenu
                color="white"
                size={40}
                onClick={() => {
                  setOpen(true);
                  setScrollLocked((c) => !c);
                }}
              />)
        )}
      </Group>
    </Container>
  );
});

export default Navbar;
