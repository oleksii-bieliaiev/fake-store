import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface LoginProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}


const Login: React.FC<LoginProps> = ({token, setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    // Only run this on the client-side
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem("userToken");
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  const loginHandler = () => {
    setUsername('');
    setPassword('');
    setError('');

    axios({
      url: 'https://fakestoreapi.com/auth/login',
      method: 'POST',
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token)
      })
      .catch((err) => {
        const errorMessage = err.response ? err.response.data : err.message;
        console.log(errorMessage);
        setError(errorMessage); 
      
      });
  };
  return (
    <div className='w-full min-h-[78vh] flex items-center justify-center flex-col'>
      <div className='flex items-center flex-col text-center'>
        <input className='p-[10px] w-[300px] border-[1px] border-[#cecece] mt-[10px] mb-[10px]' value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username' />
        <input className='p-[10px] w-[300px] border-[1px] border-[#cecece] mt-[10px] mb-[10px]' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
        {error && <small className='text-red-500 '>{error}</small>}
        <button onClick={loginHandler} className='p-[10px] w-[300px] border-[1px] border-[#cecece] mb-[10px] mt-[10px] bg-black text-white transition-all duration-500 hover:bg-neutral-500'>Login</button>
      </div>
    </div>
  )
}

export default Login
