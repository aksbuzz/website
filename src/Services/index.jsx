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
import { useMediaQuery } from '@mantine/hooks';
import Partners from '../Partners';
import ContactUsImage from '../shared/static/images/contact_us.svg';

const Services = forwardRef((props, ref) => {
  const mobile = useMediaQuery('(max-width: 576px)');
  const laptop = useMediaQuery('(min-width: 992px)');
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
          <Grid gutter={laptop ? 50 : 'xl'} sx={{ marginBottom: '50px' }}>
            <Grid.Col xs={6} sm={4}>
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
            <Grid.Col xs={6} sm={4}>
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
            <Grid.Col xs={6} sm={4}>
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
            <Grid.Col xs={6} sm={4}>
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
            <Grid.Col xs={6} sm={4}>
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
            <Grid.Col xs={6} sm={4}>
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
          <Grid sx={{ marginBottom: '50px' }}>
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
              <Image
                withPlaceholder
                width={mobile ? 75 : 150}
                height={mobile ? 125 : 250}
              />
            </Grid.Col>
          </Grid>
          <Grid sx={{ marginBottom: '50px' }}>
            <Grid.Col span={6}>
              <Image
                withPlaceholder
                width={mobile ? 75 : 150}
                height={mobile ? 125 : 250}
              />
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
          <Grid>
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
              <Image
                withPlaceholder
                width={mobile ? 75 : 150}
                height={mobile ? 125 : 250}
              />
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
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Grid.Col xs={6}>
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
            <Grid.Col xs={6}>
              <Image src={ContactUsImage} />
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
});

export default Services;
