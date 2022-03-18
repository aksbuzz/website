import {
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Text,
  Title,
  // Title,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
// import { MdLocalPhone } from 'react-icons/md';

const Footer = (props) => {
  const { onLinkClick, refs } = props;
  const navigate = useNavigate();
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <footer
      style={{
        color: '#495057',
      }}
    >
      <Divider size="xs" />
      <Container
        size="lg"
        sx={{
          padding: '40px 0px',
        }}
      >
        <Grid pb="40px">
          <Grid.Col span={3}>
            <Group direction="column" spacing="xs">
              <Title order={6} pb="15px">
                Company
              </Title>
              <Image src="" alt="company_logo" height={30} />
              {/* <Text size="xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                ipsa aliquam repellendus sapiente nihil
              </Text> */}
            </Group>
          </Grid.Col>
          <Grid.Col offset={2} span={4}>
            <Group direction="column" spacing="xs">
              <Title order={6} pb="15px">
                Quick links
              </Title>
              <Text
                onClick={() => {
                  navigate('/');
                  scrollTo({ y: 0 });
                }}
                size="xs"
                sx={{ textTransform: 'uppercase', cursor: 'pointer' }}
              >
                Home
              </Text>
              <Text
                onClick={() => onLinkClick(refs.contact)}
                size="xs"
                sx={{ textTransform: 'uppercase', cursor: 'pointer' }}
              >
                Contact
              </Text>
              <Text
                onClick={() => {
                  navigate('/careers');
                  scrollTo({ y: 0 });
                }}
                size="xs"
                sx={{ textTransform: 'uppercase', cursor: 'pointer' }}
              >
                Careers
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={3}>
            <Group direction="column">
              <Title order={6} pb="5px">
                Address
              </Title>
              <Group
                direction="column"
                sx={{
                  gap: '0px',
                }}
              >
                <Text size="xs" sx={{ fontWeight: '500' }}>
                  360 King Street
                </Text>
                <Text size="xs" sx={{ fontWeight: '500' }}>
                  Feasterville trevose, PA, 19053
                </Text>
              </Group>
              <Group>
                <Text size="xs" sx={{ fontWeight: '500' }}>
                  (+1) 202-555-0187
                </Text>
                <Text size="xs" sx={{ fontWeight: '500' }}>
                  info@example.com
                </Text>
              </Group>
            </Group>
          </Grid.Col>
        </Grid>
        {/* <Divider size="xs" pb="40px" /> */}
        <Text size="xs">Copyright © 2022 All Rights Reserved</Text>
      </Container>
    </footer>
  );
};

export default Footer;
