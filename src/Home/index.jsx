import {
  Button,
  Container,
  Grid,
  Group,
  // Header,
  Image,
  Title,
} from '@mantine/core';
import rightSVG from '../shared/static/images/right.svg';

const Home = () => {
  return (
    <section id="home">
      <Container
        size="lg"
        sx={{
          height: '500px',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid>
          <Grid.Col span={6}>
            <Group direction="column">
              <Title
                order={1}
                className="animate__animated animate__fadeInDown animate__faster"
                style={{
                  fontSize: '4rem',
                  color: '#d8f3dc',
                }}
              >
                Main content heading
              </Title>
              <p
                className="animate__animated animate__fadeInDown animate__faster"
                style={{
                  color: '#d8f3dc',
                  lineHeight: '1.4',
                }}
              >
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </p>
              <Button
                className="animate__animated animate__fadeIn animate__faster"
                sx={{
                  background: '#1b4332',
                  paddingLeft: '35px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  paddingRight: '35px',
                  '&:hover': {
                    background: '#1b4332cc',
                  },
                }}
                size="lg"
                mt="15px"
              >
                Get Started
              </Button>
            </Group>
          </Grid.Col>
          <Grid.Col
            span={4}
            offset={2}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Group>
              <Image
                className="animate__animated animate__fadeInDown animate__faster"
                src={rightSVG}
              />
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default Home;
