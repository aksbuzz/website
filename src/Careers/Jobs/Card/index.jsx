import { useState } from 'react';

import {
  Card,
  Collapse,
  Divider,
  Group,
  List,
  Text,
  Title,
} from '@mantine/core';

const JobsCard = ({ title, description, expertise, extra }) => {
  const [open, setOpen] = useState(false);
  return (
    <Group
      direction="column"
      sx={{
        border: '1px solid lightgrey',
        borderTop: '4px solid #d8f3dc',
      }}
    >
      <Card>
        <Card.Section>
          <Title
            order={3}
            sx={{
              padding: '16px 16px',
              color: '#081c15',
              fontWeight: '600',
            }}
          >
            {title}
          </Title>
        </Card.Section>
        <Divider />
        <Text size="md" weight="semibold" mt="16px" mb="16px">
          {description}
        </Text>
        <Text size="sm">
          <span style={{ fontWeight: '600' }}>Expertise: </span>
          {expertise}
        </Text>
        <Text
          onClick={() => setOpen((prev) => !prev)}
          size="sm"
          variant="link"
          color="green"
          mt="16px"
          sx={{
            cursor: 'pointer',
          }}
        >
          read
          {open ? ' less' : ' more'}
        </Text>
        <Collapse in={open}>
          <Text size="sm" mt="16px">
            <span style={{ fontWeight: '600' }}>Job Description: </span>
            <List size="sm" withPadding>
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
          </Text>
          <Text size="sm" mt="16px">
            <span style={{ fontWeight: '600' }}>Qualification: </span>
            <List size="sm" withPadding>
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
          </Text>
        </Collapse>
      </Card>
    </Group>
    // </Grid.Col>
  );
};

export default JobsCard;
