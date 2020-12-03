import React from 'react'
import Title from './components/Title'
import GHSearch from './components/GHSearch'
import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <Container>
      <section data-cy="title">
        <Title />
      </section>
      <section data-cy="main">
        <GHSearch/>
      </section>
    </Container>
  )
}

export default App
