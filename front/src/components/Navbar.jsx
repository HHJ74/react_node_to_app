import React, { useEffect, useState } from 'react';

import { jwtDecode } from 'jwt-decode';

import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/slices/authSlice';

import { navMenus } from '../utils/data';
import{ Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const dispatch = useDispatch();
  const googleClientId = process.env.REACT_APP_AUTH_CLIENT_ID;
  const [isAuthentication, setIsAuthentication] =useState(false);

  
    const handleLoginSucess = (response) => {
      const decoded=jwtDecode(response.credential);
  
      dispatch(login({authData: decoded, token: response.credential }))
      setIsAuthentication(true);
      }
  
  
useEffect(()=>{
  if(window.google){ //구글 아이디가 가져와 졌을때
    window.google.accounts.id.initialize({ //구글 값 초기화
      client_id: googleClientId,
      callback: handleLoginSucess,
    })
  }
},[googleClientId])

  const handleLoginClick = () => {
    window.google.accounts.id.prompt(); //로그인 팝업 띄우기
  };
  const handleLooutClick =() => {
    dispatch(logout());
    setIsAuthentication(false);
  }

  return (
    <nav className="navi bg-[#212121] w-1/5 h-full rounded-sm border border-gray-500 py-10 px-4 flex flex-col justify-between">
      <div className="logo-wrapper flex justify-center items-center w-full gap-8">
        <div className="logo"></div>
        <h2 className='font-semibold text-xl'>
          <Link to='/' className='font-customFontEn'>
          GPGUS0704
          </Link>
        </h2>
      </div>
      <ul className="menus">
        {navMenus.map((menu, idx)=>(
          <li 
          key={idx} 
          className={`${
            menu.idx === idx ? 'bg-gray-950' : 'hover:bg-gray-950'
          }  border border-gray-700 rounded-sm mb-1`}>
             <Link to={menu.to} className='flex gap-x-4 items-center py-2 px-10  '>
             {menu.icon} {menu.label}
             </Link>
          </li>
            ))}
        </ul>
        {isAuthentication ? (
        <button onClick={handleLooutClick}> Logout </button>
          ) : (
        <div>
        <button onClick={handleLoginClick} 
        className='font-customFontKR flex justify-center items-center gap-2
        bg-gray-300 text-gray-900 py-2 px-4 rounded-md w-full'
        >
          <FcGoogle className='h-5 w-5'/>
          Login with Google 
        </button>
        </div>
        )}
      
    </nav>
  );
};

export default Navbar;