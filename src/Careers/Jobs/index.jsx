import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Text,
  Title,
} from '@mantine/core';
import JobsCard from './Card';
import jobsData from './data';

const CareerJobs = () => {
  return (
    <Container size="lg" mt="50px">
      <Title
        order={1}
        mb="50px"
        sx={{
          color: '#081c15',
          textAlign: 'left',
          fontSize: '1.5rem',
          fontFamily: 'open-sans',
        }}
      >
        Open Positions
      </Title>
      <Grid gutter="md" mb="50px">
        {jobsData.map((job) => (
          <Grid.Col span={4}>
            <JobsCard
              key={job.id}
              title={job.title}
              description={job.description}
              expertise={job.expertise}
              extra={job.extra}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default CareerJobs;
