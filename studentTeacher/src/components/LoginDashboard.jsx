import React, {  useContext ,useState} from 'react'
import { AuthContext } from '../context/AuthContext';
import { DataContext } from '../context/DataContext';

const LoginDashboard = () => {

    const {isStudent,setIsStudent} = useContext(DataContext);
    const { handleLogin } = useContext(AuthContext);
    const [email,setIsEmail] = useState('');
    const [password,setIsPassword] = useState('');



    function handleLog(){
        setIsStudent(!isStudent);
    }

  return (
    <div className='bg-white p-10 flex flex-col gap-10 shadow-2xl rounded-2xl md:w-[40%] h-full w-full md:h-auto'>
        <h1 className='text-2xl text-center'>Welcome {isStudent?'Student🧑‍🎓':'Teacher🧑‍🏫'}</h1>
        <div className='flex justify-between flex-col'>
            <span className='text-2xl'>Email</span>
            <input type="text"  className='bg-stone-200 p-2' required value={email} onChange={(e)=>setIsEmail(e.target.value)}/>
        </div>
        <div className='flex justify-between flex-col'>
            <span className='text-2xl'>Password</span>
            <input type="password" className='bg-stone-200 p-2' required value={password} onChange={(e)=>setIsPassword(e.target.value)}/>
        </div>
        <button className='bg-blue-700 text-white p-2 text-[20px] cursor-pointer' onClick={()=>handleLogin(email,password)}>Login</button>
        <p className='text-blue-700 text-center underline cursor-pointer' onClick={handleLog}>Login in as a {isStudent?'Teacher':'Student'}</p>
    </div>
  )
}

export default LoginDashboard