import { Container, Grid, Group, Image, Title } from '@mantine/core';
import careerSVG from '../shared/static/images/career.svg';

const Careers = () => {
  return (
    <Container
      size="lg"
      sx={{
        height: '300px',
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
              style={{
                fontSize: '4rem',
                color: '#d8f3dc',
                fontFamily: 'open-sans',
              }}
            >
              Careers
            </Title>
            <p
              style={{
                color: '#d8f3dc',
                lineHeight: '1.4',
              }}
            >
              We're looking for talented people. Join us at _______
            </p>
          </Group>
        </Grid.Col>
        <Grid.Col
          span={3}
          offset={3}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Group>
            <Image src={careerSVG} />
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Careers;
