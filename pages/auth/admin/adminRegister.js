import React, { Fragment,useContext, useEffect } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import BetchipAdminAuth from './betchipAdminAuth'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form';
import NextLink from 'next/link';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import jsCookie from 'js-cookie';
import { Store } from '../../../lib/Store'
import { getError} from '../../../lib/error'
import Link from 'next/link';

function Redirect({to}) {
    const router = useRouter();

    useEffect(() => {
        router.push(to);
    }, [to]);

    return null;
}


const AdminRegister = () => {
    
    const router = useRouter();
    const { address, connectWallet } = useWeb3()
    const { state, dispatch } = useContext(Store);
    const { adminInfo } = state;
    const { redirect } = router.query;

    // if (address){
    //    return <Redirect to='../client/clientDashboardd'/>
    // }
   
    useEffect(() => {
    if (adminInfo) {
      router.push(redirect || '/admin/adminDashboard');
    }
  }, [router, adminInfo, redirect]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { enqueueSnackbar } = useSnackbar();

  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords don't match", { variant: 'error' });
      return;
    }
    try {
      const { data } = await axios.post('/api/admins/adminRegister', {
        name,
        email,
        password,
      });
      dispatch({ type: 'ADMIN_LOGIN', payload: data });
      jsCookie.set('adminInfo', JSON.stringify(data));
      router.push(redirect || '/admin/adminDashboard');
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  return (
   <Fragment>
   <BetchipAdminAuth>
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
                            sign up to your account and become Part of the Blockchain Evolution.
                        </div>
                        <div class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">BUY & SELL CryptoCurrencies, P2P Exchange </div>
                    </div>
                </div>
               
                <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    <div class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            Sign Up To BETCHIP EXCHANGE
                        </h2>
                        <div class="intro-x mt-2 text-slate-400 dark:text-slate-400 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
                        <div class="intro-x mt-8">
                            
                              <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <input
                   type="text" class="intro-x login__input form-control py-3 px-4 block" placeholder=" Name"
                  id="name"
                  label="Name"
                  inputProps={{ type: 'name' }}
                  error={Boolean(errors.name)}
                  helperText={
                    errors.name
                      ? errors.name.type === 'minLength'
                        ? 'Name length is more than 1'
                        : 'Name is required'
                      : ''
                  }
                  {...field}
                ></input>
              )}
                               ></Controller>

                        
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
                  type="text" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Email"
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
                ></input>
              )}
                             ></Controller>


                        
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
                 type="password" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password"
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


                            <div class="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
                                <div class="col-span-3 h-full rounded bg-success"></div>
                                <div class="col-span-3 h-full rounded bg-success"></div>
                                <div class="col-span-3 h-full rounded bg-success"></div>
                                <div class="col-span-3 h-full rounded bg-slate-100 dark:bg-darkmode-800"></div>
                            </div>
                            <a href="" class="intro-x text-slate-500 block mt-2 text-xs sm:text-sm">What is a secure password?</a> 

                           
                             <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <input
                  type="password" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password Confirmation"
                  id="confirmPassword"
                  label="Confirm Password"
                  inputProps={{ type: 'password' }}
                  error={Boolean(errors.confirmPassword)}
                  helperText={
                    errors.confirmPassword
                      ? errors.confirmPassword.type === 'minLength'
                        ? 'Confirm Password length is more than 5'
                        : 'Confirm Password is required'
                      : ''
                  }
                  {...field}
                ></input>
              )}
                              ></Controller>
                        </div>
                        <div class="intro-x flex items-center text-slate-600 dark:text-slate-500 mt-4 text-xs sm:text-sm">
                            <input id="remember-me" type="checkbox" class="form-check-input border mr-2"/>
                            <label class="cursor-pointer select-none" for="remember-me">I agree to the Envato</label>
                            <a class="text-primary dark:text-slate-200 ml-1" href="">Privacy Policy</a>. 
                        </div>
                         
                        <div class="intro-x flex items-center text-slate-600 dark:text-slate-500 mt-4 text-xs sm:text-sm">
                           
                            Already have an account?{' '}
                             <NextLink href={`/auth/admin/adminLogin?redirect=${redirect || '/admin/adminDashboard'}`} passHref>
                                <Link>Login</Link>
                                 </NextLink>
                            
                        </div>

                        <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                            <button type="submit"  class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Register</button>
                            <button class="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">Sign Up</button>
                            <button class="btn btn-success py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top" onClick={() => connectWallet('injected')}> <i data-lucide="download" class="w-4 h-4 mr-2"></i> WalletConnect </button>
                            </div>
                    </div>
                </div>
               
            </div>
        </div>
        </form>
    </BetchipAdminAuth>
   </Fragment>
  )
}

export default AdminRegister