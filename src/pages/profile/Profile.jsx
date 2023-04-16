import './profile.css'
import AsideTrends from '../../components/Trends/AsideTrends' 
import Sidebar from '../../components/sidebar/Sidebar'
import Countainer from '../../layouts/Countainer'
import Main from '../../layouts/Main'
 
function Profile() {  
  return (
    <Countainer>
      <Sidebar/>
        <Main> 
          <div>
            <h1 className='text-blue'>Profile</h1>
            {/* Ur Code here  */}
          </div>
        </Main>
      <AsideTrends/>
    </Countainer>
  )
}

export default Profile
