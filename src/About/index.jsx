import { forwardRef } from 'react';
import {
  Avatar,
  Blockquote,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const About = forwardRef((props, ref) => {
  const laptop = useMediaQuery('min-width: 992px)');
  return (
    <section
      id="about"
      style={{
        padding: '50px 0px 0px 0px',
        // background: '#d8f3dc',
      }}
    >
      <Container ref={ref} size="md">
        <Title
          order={1}
          sx={{
            color: '#081c15',
            textAlign: 'center',
            paddingBottom: '20px',
            fontSize: '2.4rem',
            fontFamily: 'open-sans',
          }}
        >
          About Us
        </Title>
        <Divider
          size="md"
          sx={{
            paddingBottom: '55px',
            maxWidth: '100px',
            margin: '0 auto',
          }}
        />
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
          }}
          gutter="xl"
        >
          <Grid.Col xs={6}>
            <Image withPlaceholder height="300px" />
          </Grid.Col>
          <Grid.Col xs={6}>
            <Group direction="column" p="0px">
              <Title order={2} sx={{ fontFamily: 'open-sans' }}>
                About company name
              </Title>
              <Text size="lg" align="justify" sx={{ color: '#3C4A57' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident. Lorem ipsum
                dolor sit amet consectetur adipisicing elit.molestias.
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
        <Container size="md" pt="80px">
          <Title
            pb="55px"
            order={1}
            sx={{
              color: '#081c15',
              textAlign: 'center',
              paddingBottom: '20px',
              fontSize: '1.8rem',
              fontFamily: 'open-sans',
            }}
          >
            Company values
          </Title>
          <Grid gutter={laptop ? 50 : 'xl'} sx={{ marginBottom: '50px' }}>
            <Grid.Col xs={6} sm={4}>
              <Group direction="column" position="center">
                <Image withPlaceholder width={50} height={50} radius="lg" />
                <Title order={4} sx={{ fontFamily: 'open-sans' }}>
                  Awesome Company Value
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
                  Awesome Company Value
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
                  Awesome Company Value
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
                  Awesome Company Value
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
                  Awesome Company Value
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
                  Awesome Company Value
                </Title>
                <Text size="md" align="center" sx={{ color: '#3C4A57' }}>
                  A pseudo-Latin text used in web design, layout, and printing
                  in place of things to emphasise design.
                </Text>
              </Group>
            </Grid.Col>
          </Grid>
          {/* <Grid gutter={50} sx={{ marginTop: '50px', marginBottom: '50px' }}>
          </Grid> */}
        </Container>
        <Grid pb="100px" pt="20px" gutter="xl">
          <Grid.Col xs={6} sm={4} md={3}>
            <Group direction="column" position="center">
              <Image withPlaceholder width="60px" height="60px" />
              <Title
                order={1}
                sx={{
                  fontFamily: 'open-sans',
                  fontSize: '4rem',
                  color: '#3C4A57',
                }}
              >
                4
              </Title>
              <Title
                order={4}
                sx={{ fontFamily: 'open-sans', color: '#081c15' }}
              >
                Stat #1
              </Title>
            </Group>
          </Grid.Col>

          <Grid.Col xs={6} sm={4} md={3}>
            <Group direction="column" position="center">
              <Image withPlaceholder width="60px" height="60px" />
              <Title
                order={1}
                sx={{
                  fontFamily: 'open-sans',
                  fontSize: '4rem',
                  color: '#3C4A57',
                }}
              >
                300
              </Title>
              <Title
                order={4}
                sx={{ fontFamily: 'open-sans', color: '#081c15' }}
              >
                Stat #2
              </Title>
            </Group>
          </Grid.Col>

          <Grid.Col xs={6} sm={4} md={3}>
            <Group direction="column" position="center">
              <Image withPlaceholder width="60px" height="60px" />
              <Title
                order={1}
                sx={{
                  fontFamily: 'open-sans',
                  fontSize: '4rem',
                  color: '#3C4A57',
                }}
              >
                89%
              </Title>
              <Title
                order={4}
                sx={{ fontFamily: 'open-sans', color: '#081c15' }}
              >
                Stat #3
              </Title>
            </Group>
          </Grid.Col>

          <Grid.Col xs={6} sm={4} md={3}>
            <Group direction="column" position="center">
              <Image withPlaceholder width="60px" height="60px" />
              <Title
                order={1}
                sx={{
                  fontFamily: 'open-sans',
                  fontSize: '4rem',
                  color: '#3C4A57',
                }}
              >
                50/50
              </Title>
              <Title
                order={4}
                sx={{ fontFamily: 'open-sans', color: '#081c15' }}
              >
                Stat #4
              </Title>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
      <Container size="md">
        <Divider mb="50px" />
        <Title
          order={1}
          mb="40px"
          sx={{
            color: '#081c15',
            textAlign: 'center',
            paddingBottom: '20px',
            fontSize: '2.4rem',
            fontFamily: 'open-sans',
          }}
        >
          Customer Testimonials
        </Title>
        <Grid mb="50px">
          <Grid.Col xs={6} sm={6} md={4}>
            <Card shadow="lg" p="lg">
              <Group position="center">
                <Avatar radius="xl" size="xl" />
              </Group>
              {/* <Divider /> */}
              <Blockquote
                cite="– Forrest Gump"
                icon={null}
                sx={{
                  textAlign: 'justify',
                  fontSize: '16px',
                  color: '#3C4A57',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud labore et dolore magna
                aliqua.
              </Blockquote>
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={6} md={4}>
            <Card shadow="lg" p="lg">
              <Group position="center">
                <Avatar radius="xl" size="xl" />
              </Group>
              {/* <Divider /> */}
              <Blockquote
                cite="– Forrest Gump"
                icon={null}
                sx={{
                  textAlign: 'justify',
                  fontSize: '16px',
                  color: '#3C4A57',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud labore et dolore magna
                aliqua.
              </Blockquote>
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={6} md={4}>
            <Card shadow="lg" p="lg">
              <Group position="center">
                <Avatar radius="xl" size="xl" />
              </Group>
              {/* <Divider /> */}
              <Blockquote
                cite="– Forrest Gump"
                icon={null}
                sx={{
                  textAlign: 'justify',
                  fontSize: '16px',
                  color: '#3C4A57',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud labore et dolore magna
                aliqua.
              </Blockquote>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
});

export default About;
