import './profile.css'
import Main from '../../layouts/Main'
import ProfileHeader from '../../components/profile/ProfileHeader'
import ProfileTweet from '../../components/profile/ProfileTweet'
import ProfileTweetsReply from '../../components/profile/ProfileTweetsReply'

function Profile() {
  return (
      <Main>
      <div>
        <ProfileHeader />
        <ProfileTweet />
        {/* <ProfileTweetsReply/> */}
      </div>
      </Main>
  )
}

export default Profile
