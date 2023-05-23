import React from 'react'
import Container from '../components/Container'
import userStore from '../store/userStore'
import WhiteButton from '../components/WhiteButton'

const Profile = () => {
  return (
    <Container>
      <div className='profileWrapper'>
        <p style={{ fontSize: 40 }}>Здравствуйте,
          <span style={{ fontWeight: '700' }}> {userStore.login}</span>
        </p>
        <WhiteButton />
      </div>
    </Container>
  )
}

export default Profile