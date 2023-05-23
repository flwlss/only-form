import React from 'react'
import Container from '../components/Container'
import index from '../store/index'
import WhiteButton from '../components/WhiteButton'

const Profile = () => {
  return (
    <Container>
      <div className='profileWrapper'>
        <p style={{ fontSize: 40 }}>Здравствуйте,
          <span style={{ fontWeight: '700' }}> {index.login}</span>
        </p>
        <WhiteButton />
      </div>
    </Container>
  )
}

export default Profile