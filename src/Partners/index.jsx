import { Container, Group, Image, Title } from '@mantine/core';

// Logos
import AppleLogo from '../shared/static/images/apple-music.svg';
import FacebookLogo from '../shared/static/images/clients-01.svg';
import AirbnbLogo from '../shared/static/images/clients-03.svg';
import MicrosoftLogo from '../shared/static/images/clients-04.svg';
import HubSpotLogo from '../shared/static/images/clients-05.svg';

const Partners = () => {
  return (
    <section
      id="partners"
      style={{
        padding: '50px 0px 60px 0px',
        background: '#fafbfc',
        borderTop: '1px solid #efefef',
        borderBottom: '1px solid #efefef',
        marginTop: '50px',
      }}
    >
      <Container size="lg">
        <Group direction="column" position="center" spacing="xl">
          <Title order={2} sx={{ color: '#081c15', fontFamily: 'open-sans' }}>
            Trusted by over ___ organizations
          </Title>
          <Group direction="row" spacing="60px" position="center">
            <Image src={AppleLogo} fit="contain" height="60px" width="150px" />
            <Image
              src={FacebookLogo}
              fit="contain"
              height="60px"
              width="150px"
            />
            <Image src={AirbnbLogo} fit="contain" height="60px" width="150px" />
            <Image
              src={MicrosoftLogo}
              fit="contain"
              height="60px"
              width="150px"
            />
            <Image
              src={HubSpotLogo}
              fit="contain"
              height="60px"
              width="150px"
            />
          </Group>
        </Group>
      </Container>
    </section>
  );
};

export default Partners;
