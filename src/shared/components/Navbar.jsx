import { Anchor, Group, Image } from '@mantine/core';
import { BORDERS } from '../constants/css';

const Navbar = () => {
  return (
    <Group
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
        <Anchor
          href="#home"
          sx={{
            color: 'white',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          Home
        </Anchor>
        <Anchor
          href="#services"
          sx={{
            color: 'white',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          Services
        </Anchor>
        <Anchor
          href="#about"
          sx={{
            color: 'white',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          About
        </Anchor>
        <Anchor
          href="#contact"
          sx={{
            color: 'white',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          Contact
        </Anchor>
      </Group>
    </Group>
  );
};

export default Navbar;
