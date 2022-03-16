import {
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Text,
  // Title,
} from '@mantine/core';
// import { MdLocalPhone } from 'react-icons/md';

const Footer = () => {
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
              <Image src="" alt="company_logo" height={30} />
              {/* <Text size="xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                ipsa aliquam repellendus sapiente nihil
              </Text> */}
            </Group>
          </Grid.Col>
          <Grid.Col offset={2} span={1}>
            <Group direction="column" spacing="xs">
              <Text size="xs" sx={{ textTransform: 'uppercase' }}>
                Home
              </Text>
              <Text size="xs" sx={{ textTransform: 'uppercase' }}>
                Services
              </Text>
              <Text size="xs" sx={{ textTransform: 'uppercase' }}>
                About
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={3}>
            <Group direction="column" spacing="xs">
              <Text size="xs" sx={{ textTransform: 'uppercase' }}>
                Contact
              </Text>
              <Text size="xs" sx={{ textTransform: 'uppercase' }}>
                Partners
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={3}>
            <Group direction="column">
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
        <Text size="xs">@2022 All Rights Reserved</Text>
      </Container>
    </footer>
  );
};

export default Footer;