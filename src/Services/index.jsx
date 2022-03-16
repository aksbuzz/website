import { forwardRef } from 'react';

import {
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';

const Services = forwardRef((props, ref) => {
  return (
    <section id="services" style={{ padding: '50px 0px 0px 0px' }}>
      <Container size="md" ref={ref}>
        <Title
          order={1}
          sx={{
            color: '#081c15',
            textAlign: 'center',
            paddingBottom: '20px',
            fontSize: '2.5rem',
          }}
        >
          Service section heading
        </Title>
        <Text
          size="md"
          sx={{
            paddingBottom: '55px',
            textAlign: 'center',
            color: 'grey',
          }}
        >
          Lorem ipsum doler sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Text>
        <Grid gutter={50} sx={{ marginBottom: '50px' }}>
          <Grid.Col span={4} gutter="xl">
            <Group direction="column" position="center">
              <Image withPlaceholder width={50} height={50} radius="lg" />
              <Title order={4}>High-Quality Service</Title>
              <Text size="md" align="center">
                A pseudo-Latin text used in web design, layout, and printing in
                place of things to emphasise design.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group direction="column" position="center">
              <div>
                <Image withPlaceholder width={50} height={50} radius="lg" />
              </div>
              <Title order={4}>High-Quality Service</Title>
              <Text size="md" align="center">
                A pseudo-Latin text used in web design, layout, and printing in
                place of things to emphasise design.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group direction="column" position="center">
              <Image withPlaceholder width={50} height={50} radius="lg" />
              <Title order={4}>High-Quality Service</Title>
              <Text size="md" align="center">
                A pseudo-Latin text used in web design, layout, and printing in
                place of things to emphasise design.
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
        <Grid gutter={50} sx={{ marginTop: '50px', marginBottom: '50px' }}>
          <Grid.Col span={4}>
            <Group direction="column" position="center">
              <Image withPlaceholder width={50} height={50} radius="lg" />
              <Title order={4}>High-Quality Service</Title>
              <Text size="md" align="center">
                A pseudo-Latin text used in web design, layout, and printing in
                place of things to emphasise design.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group direction="column" position="center">
              <div>
                <Image withPlaceholder width={50} height={50} radius="lg" />
              </div>
              <Title order={4}>High-Quality Service</Title>
              <Text size="md" align="center">
                A pseudo-Latin text used in web design, layout, and printing in
                place of things to emphasise design.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group direction="column" position="center">
              <Image withPlaceholder width={50} height={50} radius="lg" />
              <Title order={4}>High-Quality Service</Title>
              <Text size="md" align="center">
                A pseudo-Latin text used in web design, layout, and printing in
                place of things to emphasise design.
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
        <Divider sx={{ marginBottom: '50px' }} />
        <Title
          order={1}
          sx={{
            color: '#081c15',
            textAlign: 'center',
            paddingBottom: '20px',
            fontSize: '2rem',
          }}
        >
          Features / Issues we solve heading
        </Title>
        <Text
          size="md"
          sx={{
            paddingBottom: '55px',
            textAlign: 'center',
            color: 'grey',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Text>
        <Grid gutter={40} sx={{ marginBottom: '50px' }}>
          <Grid.Col
            span={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Group direction="column">
              <Title order={3}>Advanced features</Title>
              <Text size="md" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <Image withPlaceholder width={150} height={250} />
          </Grid.Col>
        </Grid>
        <Grid gutter={40} sx={{ marginBottom: '50px' }}>
          <Grid.Col span={6}>
            <Image withPlaceholder width={150} height={250} />
          </Grid.Col>
          <Grid.Col
            span={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Group direction="column">
              <Title order={3}>Advanced features</Title>
              <Text size="md" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident.
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
        <Grid gutter={40}>
          <Grid.Col
            span={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Group direction="column">
              <Title order={3}>Advanced features</Title>
              <Text size="md" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <Image withPlaceholder width={150} height={250} />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
});

export default Services;
