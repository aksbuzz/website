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
            fontSize: '2.5rem',
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
      </Container>
    </section>
  );
});

export default About;
