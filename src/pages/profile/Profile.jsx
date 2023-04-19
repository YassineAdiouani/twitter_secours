import './profile.css'
import AsideTrends from '../../components/Trends/AsideTrends'
import Sidebar from '../../components/sidebar/Sidebar'
import Countainer from '../../layouts/Countainer'
import Main from '../../layouts/Main'
import ProfileHeader from '../../components/profile/ProfileHeader'
import ProfileTweet from '../../components/profile/ProfileTweet'
// import ProfileTweetsReply from '../../components/profile/ProfileTweetsReply'

function Profile() {
  return (
    <Countainer>
      <Sidebar />
      <Main>
      <div>
        <ProfileHeader />
        <ProfileTweet />
        {/* <ProfileTweetsReply/> */}
      </div>
      </Main>
      <AsideTrends />
    </Countainer>
  )
}

export default Profile
