import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/RegisterPage';
import FormRow from '../components/FormRow';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import {useNavigate} from 'react-router-dom'

const initialState={
  name:'',
  email:'',
  password:'',
  isMember:true
}

function Register(){

  const [values,setValues]=useState(initialState);
  const {user,isLoading}=useSelector(store => store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();


  const handleChange=(e)=>{
      setValues({...values,[e.target.name]:e.target.value});
  }

  const onSubmit=(e)=>{
      e.preventDefault();
     const {name,email,password,isMember}=values;

     if((!name && !isMember) || !email || !password){
      toast.error("Please fill out all the fields");
      return;
     }

     if(isMember){
      dispatch(loginUser({email:email,password:password}))
      return;
     }

     dispatch(registerUser({name,email,password}));
  }

  const toggleMember=()=>{
    setValues({...values,isMember:!values.isMember})
  }

  useEffect(()=>{
    if(user){
      setTimeout(()=>{
          navigate('/')
      },2000)
    }

  },[user,navigate])

  return (
    <Wrapper className='full-page'>
         <form className='form' onSubmit={onSubmit}>
          <Logo/>
          <h3>{values.isMember?'Login':'Register'}</h3>

         { !values.isMember && <FormRow type='text' name='name' value={values.name}
                    handleChange={handleChange} labelText='name' />}
          <FormRow type='email' name='email' value={values.email}
                    handleChange={handleChange} labelText='email' />
          <FormRow type='password' name='password' value={values.password}
                    handleChange={handleChange} labelText='password' />
          
         

          <button type='submit' className='btn btn-block' disabled={isLoading}>
             {isLoading?'loading...':'submit'}
          </button>

          <button
          type='button'
          className='btn btn-block btn-hipster'
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            )
          }
        >
          {isLoading ? 'loading...' : 'demo app'}
        </button>

          <p>
            {values.isMember?'Not a member yet?':'Already a Member?'}
            <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember?'Register':'Login'}

            </button>

          </p>

         </form>
    </Wrapper>
  )
}

export default Register


