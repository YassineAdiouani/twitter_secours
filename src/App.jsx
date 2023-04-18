import { Route, Routes } from 'react-router-dom' 
import Home from './pages/Home/Home' 
import Explore from './pages/explore/Explore'
import Notifications from './pages/notification/Notifications'
import Messages from './pages/messages/Messges'
import Profile from './pages/profile/Profile'
import Bookmarks from './pages/bookmarks/Bookmarks'
 
function App() {  
  return ( 
    <Routes> 
          <Route path='/' element={<Home/>}/> 
          <Route path='/explore' element={<Explore/>}/> 
          <Route path='/notifications' element={<Notifications/>}/> 
          <Route path='/messages' element={<Messages/>}/> 
          <Route path='/bookmarks' element={<Bookmarks/>}/> 
          <Route path='/profile' element={<Profile/>}/> 
          <Route path='/login' element={<Home />}/> 
    </Routes>   
  )
}

export default App
