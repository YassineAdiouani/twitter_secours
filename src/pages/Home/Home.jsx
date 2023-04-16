import AsideTrends from '../../components/Trends/AsideTrends' 
import Sidebar from '../../components/sidebar/Sidebar'
import Countainer from '../../layouts/Countainer'
import Main from '../../layouts/Main'
import './home.css'
 
function Home() {  
  return (
    <Countainer>
      <Sidebar/>
        <Main> 
          <div>
            {/* Ur Code here  */}
            <h1 className='text-blue'>Home</h1>
          </div>
        </Main>
      <AsideTrends/>
    </Countainer>
  )
}

export default Home
