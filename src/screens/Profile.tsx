import React from 'react'
import Container from '../components/Container'

const Profile = () => {
  return (
    <Container>
      <p style={{ margin: '0 auto', fontSize: 40 }}>Здравствуйте,
        <span style={{ fontWeight: '700' }}>steve.jobs@example.com</span>
      </p>
    </Container>
  )
}

export default Profile