import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'

const twitterLink = (
  <a href="https://twitter.com/mascotas" alt="twitter link">
    Twitter
  </a>
)
const facebookLink = (
  <a href="https://facebook.com/" alt="facebook link">
    Facebook
  </a>
)
const emailLink = (
  <a href="mailto:contact@mascot.life" alt="email link">
    Email
  </a>
)

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Sobre" />
            <List>
              <List.Item as={Link} to="/privacy/">
                Privacidad
              </List.Item>
              <List.Item as={Link} to="/terms/">
                Terminos
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Servicios" />
            <List>
              <List.Item as={Link} to="/">
                Nuestros productos
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">¿Amás los animales?</Header>
            <p>
              Registrate ahora y comienza a ganar dinero cuidando, paseando o entrenando mascotas 🐶.
            </p>
            <List horizontal style={{display: 'flex'}}>
              <List.Item
                icon="twitter"
                style={{display: 'flex'}}
                content={twitterLink}
              />
              <List.Item
                icon="facebook"
                style={{display: 'flex'}}
                content={facebookLink}
              />
              <List.Item
                icon="mail"
                style={{display: 'flex'}}
                content={emailLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
