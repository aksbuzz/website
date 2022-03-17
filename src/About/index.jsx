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

const About = forwardRef((props, ref) => {
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
        >
          <Grid.Col span={5}>
            <Image withPlaceholder height="300px" />
          </Grid.Col>
          <Grid.Col offset={2} span={5}>
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
        <Group position="apart" direction="row" pt="80px" pb="80px">
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
            <Title order={4} sx={{ fontFamily: 'open-sans', color: '#081c15' }}>
              Stat #1
            </Title>
          </Group>

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
            <Title order={4} sx={{ fontFamily: 'open-sans', color: '#081c15' }}>
              Stat #2
            </Title>
          </Group>

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
            <Title order={4} sx={{ fontFamily: 'open-sans', color: '#081c15' }}>
              Stat #3
            </Title>
          </Group>

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
            <Title order={4} sx={{ fontFamily: 'open-sans', color: '#081c15' }}>
              Stat #4
            </Title>
          </Group>
        </Group>
      </Container>
    </section>
  );
});

export default About;
