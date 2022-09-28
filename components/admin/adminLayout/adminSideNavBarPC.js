import React, { Fragment } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

function AdminSideNavBarPC() {
    
    const router = useRouter();

  return (
         <Fragment>
                   <nav class="side-nav">
                <a href="" class="intro-x flex items-center pl-5 pt-4">
                    <img alt="" class="w-6" src="dist/images/logo.svg"/>
                    <span class="hidden xl:block text-white text-lg ml-3"> BETCHIP EXCHANGE ADMIN</span> 
                </a>
                <div class="side-nav__devider my-6"></div>
                <ul>
                    <li>
   
                        <a class="side-menu side-menu--active" onClick={() => {router.push('../../../admin/adminDashboard');}}>
                            <div class="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div class="side-menu__title">
                                Dashboard 
                                <div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>                   
                    </li>
                    <li class="side-nav__devider my-6"></li>
                   
                    <li>
                        <a class="side-menu"  onClick={() => {router.push('../../../admin/adminProfile');}}>
                            <div class="side-menu__icon"> <i data-lucide="users"></i> </div>
                            <div class="side-menu__title">
                                Profile 
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul class="">
                            <li>
                                <a href="side-menu-dark-users-layout-1.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Layout 1 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-users-layout-2.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Layout 2 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-users-layout-3.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Layout 3 </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                     <li>
                        <a class="side-menu" onClick={() => {router.push('../../../admin/adminNotifications');}}>
                            <div class="side-menu__icon"> <i data-lucide="file-text"></i> </div>
                            <div class="side-menu__title">
                                Notifications 
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                       
                    </li>
                    <li class="side-nav__devider my-6"></li>
                    <li>
                        <a  class="side-menu" onClick={() => {router.push('../../../admin/adminWallet');}}>
                            <div class="side-menu__icon"> <i data-lucide="layout"></i> </div>
                            <div class="side-menu__title">
                                Client Accounts
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul class="">
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Wizards 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-wizard-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wizard-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wizard-layout-3.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Blog 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-blog-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-blog-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-blog-layout-3.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Pricing 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-pricing-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-pricing-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Invoice 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-invoice-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-invoice-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        FAQ 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-faq-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-faq-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-faq-layout-3.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="login-dark-login.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Login </div>
                                </a>
                            </li>
                            <li>
                                <a href="login-dark-register.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Register </div>
                                </a>
                            </li>
                            <li>
                                <a href="main-dark-error-page.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Error Page </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-update-profile.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Update profile </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-change-password.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Change Password </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                       <li>
                        <a class="side-menu" onClick={() => {router.push('../../../admin/adminTransactions');}}>
                            <div class="side-menu__icon"> <i data-lucide="credit-card"></i> </div>
                            <div class="side-menu__title">
                                Transactions 
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul class="">
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Wizards 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-wizard-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wizard-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wizard-layout-3.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Blog 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-blog-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-blog-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-blog-layout-3.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Pricing 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-pricing-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-pricing-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Invoice 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-invoice-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-invoice-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        FAQ 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-faq-layout-1.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-faq-layout-2.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-faq-layout-3.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="login-dark-login.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Login </div>
                                </a>
                            </li>
                            <li>
                                <a href="login-dark-register.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Register </div>
                                </a>
                            </li>
                            <li>
                                <a href="main-dark-error-page.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Error Page </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-update-profile.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Update profile </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-change-password.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Change Password </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="side-nav__devider my-6"></li>
                    <li>
                        <a class="side-menu" onClick={() => {router.push('../../../admin/adminP2P');}}>
                            <div class="side-menu__icon"> <i data-lucide="inbox"></i> </div>
                            <div class="side-menu__title">
                                P2P 
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul class="">
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Table 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-regular-table.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Regular Table</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-tabulator.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Tabulator</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Overlay 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-modal.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Modal</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-slide-over.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Slide Over</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-notification.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Notification</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-dark-tab.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Tab </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-accordion.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Accordion </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-button.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Button </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-alert.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Alert </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-progress-bar.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Progress Bar </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-tooltip.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Tooltip </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-dropdown.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Dropdown </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-typography.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Typography </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-icon.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Icon </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-loading-icon.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Loading Icon </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="side-menu" onClick={() => {router.push('../../../admin/adminP2PTerminal');}}>
                            <div class="side-menu__icon"> <i data-lucide="sidebar"></i> </div>
                            <div class="side-menu__title">
                               P2P Terminal 
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul class="">
                            <li>
                                <a href="side-menu-dark-regular-form.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Regular Form </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-datepicker.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Datepicker </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-tom-select.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Tom Select </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-file-upload.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> File Upload </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Wysiwyg Editor 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-classic.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Classic</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-inline.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Inline</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-balloon.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Balloon</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-balloon-block.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Balloon Block</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-document.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Document</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-dark-validation.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Validation </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="side-nav__devider my-6"></li>
                    <li>
                        <a class="side-menu" onClick={() => {router.push('../../../admin/betchipAnnouncement/betchipAnnouncement');}}>
                            <div class="side-menu__icon"> <i data-lucide="inbox"></i> </div>
                            <div class="side-menu__title">
                                Betchip Adverts & Notifications
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul class="">
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Table 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-regular-table.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Regular Table</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-tabulator.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Tabulator</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Overlay 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-modal.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Modal</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-slide-over.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Slide Over</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-notification.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Notification</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-dark-tab.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Tab </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-accordion.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Accordion </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-button.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Button </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-alert.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Alert </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-progress-bar.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Progress Bar </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-tooltip.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Tooltip </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-dropdown.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Dropdown </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-typography.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Typography </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-icon.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Icon </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-loading-icon.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Loading Icon </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="side-menu" onClick={() => {router.push('../../../admin/blockchainNews');}}>
                            <div class="side-menu__icon"> <i data-lucide="sidebar"></i> </div>
                            <div class="side-menu__title">
                               Blockchain News 
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul class="">
                            <li>
                                <a href="side-menu-dark-regular-form.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Regular Form </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-datepicker.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Datepicker </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-tom-select.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Tom Select </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-file-upload.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> File Upload </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Wysiwyg Editor 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-classic.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Classic</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-inline.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Inline</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-balloon.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Balloon</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-balloon-block.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Balloon Block</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-document.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Document</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-dark-validation.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Validation </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="side-nav__devider my-6"></li>
                     <li>
                        <a class="side-menu" onClick={() => {router.push('../../../admin/betchipCryptoListing');}}>
                            <div class="side-menu__icon"> <i data-lucide="inbox"></i> </div>
                            <div class="side-menu__title">
                                Betchip Crypto Listing
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul class="">
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Table 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-regular-table.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Regular Table</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-tabulator.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Tabulator</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Overlay 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-modal.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Modal</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-slide-over.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Slide Over</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-notification.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Notification</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-dark-tab.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Tab </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-accordion.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Accordion </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-button.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Button </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-alert.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Alert </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-progress-bar.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Progress Bar </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-tooltip.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Tooltip </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-dropdown.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Dropdown </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-typography.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Typography </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-icon.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Icon </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-loading-icon.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Loading Icon </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        <a class="side-menu" onClick={() => {router.push('../../../admin/betchipRecommendedTokens');}}>
                            <div class="side-menu__icon"> <i data-lucide="sidebar"></i> </div>
                            <div class="side-menu__title">
                               Betchip Recommended Tokens
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul class="">
                            <li>
                                <a href="side-menu-dark-regular-form.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Regular Form </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-datepicker.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Datepicker </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-tom-select.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Tom Select </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dark-file-upload.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> File Upload </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title">
                                        Wysiwyg Editor 
                                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul class="">
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-classic.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Classic</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-inline.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Inline</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-balloon.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Balloon</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-balloon-block.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Balloon Block</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dark-wysiwyg-editor-document.html" class="side-menu">
                                            <div class="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div class="side-menu__title">Document</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-dark-validation.html" class="side-menu">
                                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div class="side-menu__title"> Validation </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="side-nav__devider my-6"></li>
                    
                </ul>
            </nav>
          </Fragment>
  )
}

export default AdminSideNavBarPC