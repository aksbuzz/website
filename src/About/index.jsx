import { forwardRef } from 'react';
import { Container, Divider, Title } from '@mantine/core';

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
      </Container>
    </section>
  );
});

export default About;
