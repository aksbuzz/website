import { forwardRef } from 'react';

import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import Partners from '../Partners';
import ContactUsImage from '../shared/static/images/contact_us.svg'

const Services = forwardRef((props, ref) => {
  return (
    <>
      <section id="services" style={{ padding: '50px 0px 0px 0px' }}>
        <Container size="md" ref={ref}>
          <Title
            order={1}
            sx={{
              color: '#081c15',
              textAlign: 'center',
              paddingBottom: '20px',
              fontSize: '2.5rem',
              fontFamily: 'open-sans',
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
                <Title order={4} sx={{ fontFamily: 'open-sans' }}>
                  High-Quality Service
                </Title>
                <Text size="md" align="center" sx={{ color: '#3C4A57' }}>
                  A pseudo-Latin text used in web design, layout, and printing
                  in place of things to emphasise design.
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={4}>
              <Group direction="column" position="center">
                <div>
                  <Image withPlaceholder width={50} height={50} radius="lg" />
                </div>
                <Title order={4} sx={{ fontFamily: 'open-sans' }}>
                  High-Quality Service
                </Title>
                <Text size="md" align="center" sx={{ color: '#3C4A57' }}>
                  A pseudo-Latin text used in web design, layout, and printing
                  in place of things to emphasise design.
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={4}>
              <Group direction="column" position="center">
                <Image withPlaceholder width={50} height={50} radius="lg" />
                <Title order={4} sx={{ fontFamily: 'open-sans' }}>
                  High-Quality Service
                </Title>
                <Text size="md" align="center" sx={{ color: '#3C4A57' }}>
                  A pseudo-Latin text used in web design, layout, and printing
                  in place of things to emphasise design.
                </Text>
              </Group>
            </Grid.Col>
          </Grid>
          <Grid gutter={50} sx={{ marginTop: '50px', marginBottom: '50px' }}>
            <Grid.Col span={4}>
              <Group direction="column" position="center">
                <Image withPlaceholder width={50} height={50} radius="lg" />
                <Title order={4} sx={{ fontFamily: 'open-sans' }}>
                  High-Quality Service
                </Title>
                <Text size="md" align="center" sx={{ color: '#3C4A57' }}>
                  A pseudo-Latin text used in web design, layout, and printing
                  in place of things to emphasise design.
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={4}>
              <Group direction="column" position="center">
                <div>
                  <Image withPlaceholder width={50} height={50} radius="lg" />
                </div>
                <Title order={4} sx={{ fontFamily: 'open-sans' }}>
                  High-Quality Service
                </Title>
                <Text size="md" align="center" sx={{ color: '#3C4A57' }}>
                  A pseudo-Latin text used in web design, layout, and printing
                  in place of things to emphasise design.
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={4}>
              <Group direction="column" position="center">
                <Image withPlaceholder width={50} height={50} radius="lg" />
                <Title order={4} sx={{ fontFamily: 'open-sans' }}>
                  High-Quality Service
                </Title>
                <Text size="md" align="center" sx={{ color: '#3C4A57' }}>
                  A pseudo-Latin text used in web design, layout, and printing
                  in place of things to emphasise design.
                </Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
        <Partners />
        <Container size="md" mt="50px">
          {/* <Divider sx={{ marginBottom: '50px' }} /> */}
          <Title
            order={1}
            sx={{
              color: '#081c15',
              textAlign: 'center',
              paddingBottom: '20px',
              fontSize: '2rem',
              fontFamily: 'open-sans',
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
                <Title order={3} sx={{ fontFamily: 'open-sans' }}>
                  Advanced features
                </Title>
                <Text size="md" align="justify" sx={{ color: '#3C4A57' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <Title order={3} sx={{ fontFamily: 'open-sans' }}>
                  Advanced features
                </Title>
                <Text size="md" align="justify" sx={{ color: '#3C4A57' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <Title order={3} sx={{ fontFamily: 'open-sans' }}>
                  Advanced features
                </Title>
                <Text size="md" align="justify" sx={{ color: '#3C4A57' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      <section
        style={{
          marginTop: '70px',
          padding: '50px 0px 50px 0px',
          background: 'rgb(216, 243, 220)',
        }}
      >
        <Container size="md">
          <Grid>
            <Grid.Col span={6}>
              <Group direction="column" spacing="xl">
                <Title order={1} sx={{ fontFamily: 'open-sans' }}>
                  To learn how ________ can help to drive your business?
                </Title>
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
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <Image src={ContactUsImage} />
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
});

export default Services;
