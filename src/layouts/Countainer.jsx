import React from 'react';
import './countainer.css';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import WhoToFollow from '../components/WhoToFollow/WhoToFollow';
import AsideTrends from '../components/Trends/AsideTrends';
import { useStateContext } from '../contexts/ContextProvider';
import NewToTwitter from '../components/NewToTwitter/NewToTwitter';
import FooterAuth from '../components/Auth/FooterModal/FooterAuth';
import LoginModal from '../components/Auth/LoginModal/LoginModal';

export default function Countainer() {
  const { Auth } = useStateContext()
  const path = useLocation().pathname != '/bookmarks' && useLocation().pathname != '/profile';
  return (
    <div className='countainer'>
        <Sidebar /> 
        <Outlet />
        {
          Auth ? ( path ? <WhoToFollow /> : <AsideTrends /> ) :  <NewToTwitter />
        }
        {
          !Auth && (
            <>
              <FooterAuth />
              <LoginModal />
            </>
          )
        }
    </div>
  )
}
