import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Admin from '../../../pages/admin/admin'
import { useWeb3 } from '@3rdweb/hooks'
import GuestLandingPage from '../../../pages/guest/guestLandingPage';
import { Store } from '../../../lib/Store';
import { useSnackbar } from 'notistack';
import jsCookie from 'js-cookie';
import {getError} from '../../../lib/error';
import Head from 'next/head';
import axios from 'axios';
import NextLink from 'next/link';
import Link from 'next/link';



function Redirect({to}) {
    const router = useRouter();

    useEffect(() => {
        router.push(to);
    }, [to]);

    return null;
}


const AdminHeader = ({title, description, twTokens, sanityTokens, walletAddress }) => {

     const router = useRouter();
     const { state, dispatch } = useContext(Store);
     const {  board, adminInfo } = state;

  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState(null);
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

 const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'ADMIN_LOGOUT' });
    jsCookie.remove('adminInfo');
    jsCookie.remove('boardItems');
    router.push('/auth/admin/adminLogin');
  };

    
 //<GuestLandingPage />
  return (
   <>
       <Head>
        <title>{title ? `${title} - Betchip Exchange` : 'Betchip Exchange'}</title>
        {description && <meta name="description" content={description}></meta>}
        </Head> ,
               
               <div class="top-bar" onClick={loginClickHandler}>
               
                    <nav aria-label="breadcrumb" class="-intro-x mr-auto hidden sm:flex">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Application</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                         <a  class="ml-auto flex items-center text-success">{walletAddress}<i data-lucide="check-square" class="w-4 h-4 mr-3"></i> Wallet Connected </a>
                       
                    </nav>
               {adminInfo ? (
                <>
                    <div class="intro-x relative mr-3 sm:mr-6" >
                        <div class="search hidden sm:block"> 
                            <input type="text" class="search__input form-control border-transparent" placeholder="Search..."/>
                            <i data-lucide="search" class="search__icon dark:text-slate-500"></i> 
                        </div>
                        <a class="notification sm:hidden" href=""> <i data-lucide="search" class="notification__icon dark:text-slate-500"></i> </a>
                        <div class="search-result">
                            <div class="search-result__content">
                                <div class="search-result__content__title">Pages</div>
                                <div class="mb-5">
                                    <a href="" class="flex items-center">
                                        <div class="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"> <i class="w-4 h-4" data-lucide="inbox"></i> </div>
                                        <div class="ml-3">Mail Settings</div>
                                    </a>
                                    <a href="" class="flex items-center mt-2">
                                        <div class="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"> <i class="w-4 h-4" data-lucide="users"></i> </div>
                                        <div class="ml-3">Users & Permissions</div>
                                    </a>
                                    <a href="" class="flex items-center mt-2">
                                        <div class="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"> <i class="w-4 h-4" data-lucide="credit-card"></i> </div>
                                        <div class="ml-3">Transactions Report</div>
                                    </a>
                                </div>
                                <div class="search-result__content__title">Users</div>
                                <div class="mb-5">
                                    <a href="" class="flex items-center mt-2">
                                        <div class="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-9.jpg"/>
                                        </div>
                                        <div class="ml-3">Al Pacino</div>
                                        <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">alpacino@left4code.com</div>
                                    </a>
                                    <a href="" class="flex items-center mt-2">
                                        <div class="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-1.jpg"/>
                                        </div>
                                        <div class="ml-3">Johnny Depp</div>
                                        <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">johnnydepp@left4code.com</div>
                                    </a>
                                    <a href="" class="flex items-center mt-2">
                                        <div class="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-14.jpg"/>
                                        </div>
                                        <div class="ml-3">Leonardo DiCaprio</div>
                                        <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">leonardodicaprio@left4code.com</div>
                                    </a>
                                    <a href="" class="flex items-center mt-2">
                                        <div class="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-3.jpg"/>
                                        </div>
                                        <div class="ml-3">Angelina Jolie</div>
                                        <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">angelinajolie@left4code.com</div>
                                    </a>
                                </div>
                                <div class="search-result__content__title">Products</div>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/preview-8.jpg"/>
                                    </div>
                                    <div class="ml-3">Samsung Q90 QLED TV</div>
                                    <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">Electronic</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/preview-12.jpg"/>
                                    </div>
                                    <div class="ml-3">Samsung Q90 QLED TV</div>
                                    <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">Electronic</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/preview-7.jpg"/>
                                    </div>
                                    <div class="ml-3">Samsung Galaxy S20 Ultra</div>
                                    <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">Smartphone &amp; Tablet</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/preview-1.jpg"/>
                                    </div>
                                    <div class="ml-3">Sony A7 III</div>
                                    <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">Photography</div>
                                </a>
                            </div>
                        </div>
                    </div>
              
                    <div class="intro-x dropdown mr-auto sm:mr-6">
                        <div class="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="bell" class="notification__icon dark:text-slate-500"></i> </div>
                        <div class="notification-content pt-2 dropdown-menu">
                            <div class="notification-content__box dropdown-content">
                                <div class="notification-content__title">Notifications</div>
                                <div class="cursor-pointer relative flex items-center ">
                                    <div class="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-9.jpg"/>
                                        <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div class="ml-2 overflow-hidden">
                                        <div class="flex items-center">
                                            <a href="javascript:;" class="font-medium truncate mr-5">Al Pacino</a> 
                                            <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">06:05 AM</div>
                                        </div>
                                        <div class="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                    </div>
                                </div>
                                <div class="cursor-pointer relative flex items-center mt-5">
                                    <div class="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-1.jpg"/>
                                        <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div class="ml-2 overflow-hidden">
                                        <div class="flex items-center">
                                            <a href="javascript:;" class="font-medium truncate mr-5">Johnny Depp</a> 
                                            <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                        </div>
                                        <div class="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                    </div>
                                </div>
                                <div class="cursor-pointer relative flex items-center mt-5">
                                    <div class="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-14.jpg"/>
                                        <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div class="ml-2 overflow-hidden">
                                        <div class="flex items-center">
                                            <a href="javascript:;" class="font-medium truncate mr-5">Leonardo DiCaprio</a> 
                                            <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                        </div>
                                        <div class="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                    </div>
                                </div>
                                <div class="cursor-pointer relative flex items-center mt-5">
                                    <div class="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-3.jpg"/>
                                        <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div class="ml-2 overflow-hidden">
                                        <div class="flex items-center">
                                            <a href="javascript:;" class="font-medium truncate mr-5">Angelina Jolie</a> 
                                            <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                        </div>
                                        <div class="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                    </div>
                                </div>
                                <div class="cursor-pointer relative flex items-center mt-5">
                                    <div class="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-8.jpg"/>
                                        <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div class="ml-2 overflow-hidden">
                                        <div class="flex items-center">
                                            <a href="javascript:;" class="font-medium truncate mr-5">Bruce Willis</a> 
                                            <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                        </div>
                                        <div class="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                    <div class="intro-x dropdown w-8 h-8" anchorEl={anchorEl} keepMounted  open={Boolean(anchorEl)}  onClose={loginMenuCloseHandler}>
                        <div class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button" aria-expanded="false" data-tw-toggle="dropdown">
                            <img alt="Midone - HTML Admin Template" src="dist/images/profile-8.jpg"/>
                        </div>
                        <div class="dropdown-menu w-56">
                            <ul class="dropdown-content bg-primary text-white">
                                <li class="p-2">
                                    <div class="font-medium">{adminInfo.name}</div>
                                    <div class="text-xs text-white/70 mt-0.5 dark:text-slate-500">BETCHIP STAFF</div>
                                </li>
                                <li>
                                    <hr class="dropdown-divider border-white/[0.08]"/>
                                </li>
                                <li>
                                    <a   onClick={(e) => loginMenuCloseHandler(e, '/profile')} class="dropdown-item hover:bg-white/5"> <i data-lucide="user" class="w-4 h-4 mr-2"></i> Profile </a>
                                </li>
                                <li>
                                    <a  onClick={(e) =>  loginMenuCloseHandler(e, '/order-history') }  class="dropdown-item hover:bg-white/5"> <i data-lucide="edit" class="w-4 h-4 mr-2"></i> Add Account </a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item hover:bg-white/5"> <i data-lucide="lock" class="w-4 h-4 mr-2"></i> Reset Password </a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item hover:bg-white/5"> <i data-lucide="help-circle" class="w-4 h-4 mr-2"></i> Help </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider border-white/[0.08]"/>
                                </li>
                                <li>
                                    <a class="dropdown-item hover:bg-white/5" onClick={logoutClickHandler} > <i data-lucide="toggle-right" class="w-4 h-4 mr-2"></i> Logout </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   </>
                   ) : (
                 <NextLink href="/auth/admin/adminLogin" passHref>
                  <Link>Login</Link>
                </NextLink>
              )}
         
                   
                </div>
            
        
</>
  );
}

export default AdminHeader