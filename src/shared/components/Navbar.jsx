import { Group, Image, Text } from '@mantine/core';
import { BORDERS } from '../constants/css';

const Navbar = (props) => {
  const { onLinkClick, refs } = props;
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
        <Text
          onClick={() => onLinkClick(refs.home)}
          sx={{
            color: 'white',
            '&:hover': {
              textDecoration: 'none',
              cursor: 'pointer',
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
            },
          }}
        >
          Contact
        </Text>
      </Group>
    </Group>
  );
};

export default Navbar;
