

import React from 'react';

interface Props {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const HeaderNav: React.FC<Props> = ({setToken}) => {

  const logOutHandler = () => {
    setToken('');
    localStorage.removeItem("userToken");
  }


  return (
    <div className='w-full bg-neutral-500 lg:h-[12vh] md:h-[16vh] justify-center shrink-0 flex items-center shadow-[0_10px_20px_rgba(0,0,0,0.5),0_6px_6px_rgba(0,0,0,0.3)]'>
      <h1 className='text-4xl font-bold text-black font-sans'>Fake store app</h1>
      <button onClick={logOutHandler} className='p-[10px] w-[100px] h-[40px] flex justify-center items-center border-[1px] border-[#cecece] ml-[50px] transition-all duration-500 hover:bg-white '>Log out</button>
    </div>
  )
}

export default HeaderNav
