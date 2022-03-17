/* eslint-disable react/no-unescaped-entities */
import { forwardRef } from 'react';
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

import {
  MdLocationPin,
  MdLocalPhone,
  MdOutlineAlternateEmail,
} from 'react-icons/md';
import { BORDERS } from '../shared/constants/css';

const ContactUs = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      style={{
        padding: '50px 0px',
        background: '#d8f3dc',
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
          Get In Touch
        </Title>
        <Divider
          size="md"
          sx={{
            paddingBottom: '50px',
            maxWidth: '100px',
            margin: '0 auto',
          }}
        />
        <Card shadow="xl" p="0px" mb="10px">
          <Grid
            sx={{
              border: BORDERS.INPUT_BORDER,
              background: 'white',
              borderRadius: BORDERS.BORDER_RADIUS,
            }}
          >
            <Grid.Col
              span={6}
              sx={{
                padding: '30px',
              }}
            >
              <form>
                <TextInput
                  styles={{
                    label: {
                      color: '#656b70',
                      fontSize: '12px',
                      fontWeight: '600',
                      marginBottom: '0px',
                    },
                  }}
                  type="text"
                  label="Full name"
                  size="md"
                  pb="30px"
                />
                <TextInput
                  styles={{
                    label: {
                      color: '#656b70',
                      fontSize: '12px',
                      fontWeight: '600',
                      marginBottom: '0px',
                    },
                  }}
                  type="email"
                  label="E-mail"
                  size="md"
                  pb="30px"
                />
                <Textarea
                  styles={{
                    label: {
                      color: '#656b70',
                      fontSize: '12px',
                      fontWeight: '600',
                      marginBottom: '0px',
                    },
                  }}
                  label="Message"
                  autosize
                  minRows={4}
                  maxRows={8}
                  pb="30px"
                />
                <Group position="right">
                  <Button variant="filled" color="teal">
                    Send
                  </Button>
                </Group>
              </form>
            </Grid.Col>
            <Grid.Col
              span={6}
              sx={{
                background: '#b7e4c7',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Title order={3} pb="20px" sx={{ fontFamily: 'open-sans' }}>
                We'd love to hear from you.
              </Title>
              <Text
                sx={{
                  width: '80%',
                }}
                size="sm"
                pb="30px"
              >
                Feel free to contact us and we will get back to you as soon as
                we can.
              </Text>
              <div>
                <Group direction="column" pb="40px">
                  <Group spacing="md">
                    <Title
                      order={2}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <MdLocalPhone />
                    </Title>
                    <Group
                      direction="column"
                      sx={{
                        gap: '0px',
                      }}
                    >
                      <Text size="md" sx={{ fontWeight: '500' }}>
                        (+1) 202-555-0187
                      </Text>
                    </Group>
                  </Group>
                </Group>

                <Group direction="column" pb="30px">
                  <Group spacing="md">
                    <Title
                      order={2}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <MdOutlineAlternateEmail />
                    </Title>
                    <Group
                      direction="column"
                      sx={{
                        gap: '0px',
                      }}
                    >
                      <Text size="md" sx={{ fontWeight: '500' }}>
                        info@example.com
                      </Text>
                    </Group>
                  </Group>
                </Group>

                <Group direction="column">
                  <Group
                    spacing="md"
                    sx={{
                      alignItems: 'flex-start',
                    }}
                  >
                    <Title
                      order={2}
                      sx={{
                        display: 'flex',
                        marginTop: '5px',
                        color: '#081c15',
                      }}
                    >
                      <MdLocationPin />
                    </Title>
                    <Group
                      direction="column"
                      sx={{
                        gap: '0px',
                      }}
                    >
                      <Text size="md" sx={{ fontWeight: '500' }}>
                        360 King Street
                      </Text>
                      <Text size="md" sx={{ fontWeight: '500' }}>
                        Feasterville trevose, PA, 19053
                      </Text>
                    </Group>
                  </Group>
                </Group>
              </div>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </section>
  );
});

export default ContactUs;
