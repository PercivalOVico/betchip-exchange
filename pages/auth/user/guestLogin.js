import React, { Fragment,useContext, useEffect } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import BetchipAuth from './betchipAuth'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ClientDashboardd from '../../client/clientDashboardd'
import AdminDashboard from '../../admin/adminDashboard'
import { useSnackbar } from 'notistack';
import axios from 'axios';
import jsCookie from 'js-cookie';
import { useForm, Controller } from 'react-hook-form';
import NextLink from 'next/link';
import { Store } from '../../../lib/Store'
import { getError} from '../../../lib/error'



function Redirect({to}) {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;

     const { redirect } = router.query;

    useEffect(() => {
        router.push(to);
    }, [to]);

    return null;
}


const GuestLogin = () => {

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  const { redirect } = router.query;
  useEffect(() => {
    if (userInfo) {
      router.push(redirect || '/');
    }
  }, [router, userInfo, redirect]);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { enqueueSnackbar } = useSnackbar();
  const submitHandler = async ({ email, password }) => {
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });
      jsCookie.set('userInfo', JSON.stringify(data));
      router.push(redirect || '/');
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  return (
    <Fragment>
    <BetchipAuth title="Login">
      <form onSubmit={handleSubmit(submitHandler)}>
       <div class="container sm:px-10">
            <div class="block xl:grid grid-cols-2 gap-4">
              
                <div class="hidden xl:flex flex-col min-h-screen">
                    <a href="" class="-intro-x flex items-center pt-5">
                        <img alt="" class="w-6" src="dist/images/logo.svg"/>
                        <span class="text-white text-lg ml-3"> BETCHIP EXCHANGE </span> 
                    </a>
                    <div class="my-auto">
                        <img alt="" class="-intro-x w-1/2 -mt-16" src="dist/images/illustration.svg"/>
                        <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            A few more clicks to 
                            <br/>
                            sign in to your BETCHIP account.
                        </div>
                        <div class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">BUY & SELL CryptoCurrencies, P2P Exchange</div>
                    </div>
                </div>
                
                <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0" >
                    <div class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            Sign In To BETCHIP
                        </h2>
                        <div class="intro-x mt-2 text-slate-400 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
                        <div class="intro-x mt-8">
                           
                            
                            
             <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <input
                
                 class="intro-x login__input form-control py-3 px-4 block" type="text"
                 placeholder="Email"
                  fullWidth
                  id="email"
                  label="Email"
                  inputProps={{ type: 'email' }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === 'pattern'
                        ? 'Email is not valid'
                        : 'Email is required'
                      : ''
                  }
                  {...field}
               />
              )} >
              </Controller>
                            
                          

                            
                         
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <input
                 class="intro-x login__input form-control py-3 px-4 block mt-4" type="password"  placeholder="Password"
                  id="password"
                  label="Password"
                  inputProps={{ type: 'password' }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === 'minLength'
                        ? 'Password length is more than 5'
                        : 'Password is required'
                      : ''
                  }
                  {...field}
               ></input>
              )}
            ></Controller>
                        </div>
                        <div class="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                            <div class="flex items-center mr-auto">
                                <input id="remember-me" type="checkbox" class="form-check-input border mr-2"/>
                                <label class="cursor-pointer select-none" for="remember-me">Remember me</label>
                            </div>
                            <a href="">Forgot Password?</a>
                              
                        </div>
                        <br/>
                        <div class="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                         <div class="flex items-center mr-auto" >
                                
                              <a href="">Do not have an account?{' '}
                               <NextLink href={`/auth/guestRegister?redirect=${redirect || '/'}`} passHref>
                               <Link>Register</Link>
                              </NextLink>
                              </a> 
                        </div>
                        </div>
                        <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                            <button type="submit"  class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Login</button>
                            <button class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" onClick={() => { router.push('../client/clientDashboardd');}}>Client Login</button>
                            <button class="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">Register</button>
                            <button class="btn btn-success py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top" > <i data-lucide="download" class="w-4 h-4 mr-2"></i> WalletConnect </button> 
         
        
     


                        </div>
                        <div class="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left"> By signin up, you agree to our <a class="text-primary dark:text-slate-200" href="">Terms and Conditions</a> & <a class="text-primary dark:text-slate-200" href="">Privacy Policy</a> </div>
                    </div>
                </div>
               
            
               
            </div>
        </div>
      </form>
    </BetchipAuth>
    </Fragment>
  )
}

export default GuestLogin