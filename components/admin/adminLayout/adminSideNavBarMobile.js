import React, { Fragment } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import AdminProfile from '../../../pages/admin/adminProfile';


const AdminSideNavBarMobile = ({ twTokens, sanityTokens, walletAddress, connectWallet }) => {

    const router = useRouter();

  return (
         <Fragment>
            <div class="mobile-menu md:hidden">
            <div class="mobile-menu-bar">
                <a href="" class="flex mr-auto">
                    <img alt="" class="w-6" src="dist/images/logo.svg"/>
                </a>
                <a href="javascript:;" id="mobile-menu-toggler"> <i data-lucide="bar-chart-2" class="w-8 h-8 text-white transform -rotate-90"></i> </a>
            </div>
            <ul class="border-t border-white/[0.08] py-5 hidden">
                <li>
                    <a class="menu menu--active" onClick={() => {router.push('../../../admin/adminDashboard');}}>
                        <div class="menu__icon"> <i data-lucide="home"></i> </div>
                        <div class="menu__title" > Dashboard <i data-lucide="chevron-down" class="menu__sub-icon transform rotate-180"></i> </div> 
                    </a>
                </li>
                <li class="menu__devider my-6"></li>
                <li>
                    <a class="menu" onClick={() => {router.push('../../../client/clientProfile');}}>
                        <div class="menu__icon"> <i data-lucide="users"></i> </div>
                        <div class="menu__title"> Profile <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-users-layout-1.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Layout 1 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-users-layout-2.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Layout 2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-users-layout-3.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Layout 3 </div>
                            </a>
                        </li>
                    </ul>
                </li>
                 <li>
                    <a  class="menu" onClick={() => {router.push('../../../admin/adminNotifications');}}>
                        <div class="menu__icon"> <i data-lucide="file-text"></i> </div>
                        <div class="menu__title"> Notifications <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-users-layout-1.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Layout 1 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-users-layout-2.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Layout 2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-users-layout-3.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Layout 3 </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="side-nav__devider my-6"></li>
                <li>
                    <a class="menu" onClick={() => {router.push('../../../admin/adminWallet');}}>
                        <div class="menu__icon"> <i data-lucide="layout"></i> </div>
                        <div class="menu__title"> Client Accounts <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Wizards <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-wizard-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wizard-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wizard-layout-3.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Blog <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-blog-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-blog-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-blog-layout-3.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Pricing <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-pricing-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-pricing-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Invoice <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-invoice-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-invoice-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> FAQ <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-faq-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-faq-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-faq-layout-3.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="login-dark-login.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Login </div>
                            </a>
                        </li>
                        <li>
                            <a href="login-dark-register.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Register </div>
                            </a>
                        </li>
                        <li>
                            <a href="main-dark-error-page.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Error Page </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-update-profile.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Update profile </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-change-password.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Change Password </div>
                            </a>
                        </li>
                    </ul>
                </li>
                  <li>
                    <a class="menu" onClick={() => {router.push('../../../admin/adminProfile');}}>
                        <div class="menu__icon"> <i data-lucide="credit-card"></i> </div>
                        <div class="menu__title"> Transactions <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Wizards <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-wizard-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wizard-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wizard-layout-3.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Blog <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-blog-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-blog-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-blog-layout-3.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Pricing <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-pricing-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-pricing-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Invoice <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-invoice-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-invoice-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> FAQ <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-faq-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-faq-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-faq-layout-3.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="login-dark-login.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Login </div>
                            </a>
                        </li>
                        <li>
                            <a href="login-dark-register.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Register </div>
                            </a>
                        </li>
                        <li>
                            <a href="main-dark-error-page.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Error Page </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-update-profile.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Update profile </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-change-password.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Change Password </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu__devider my-6"></li>
                <li>
                    <a class="menu" onClick={() => {router.push('../../../admin/adminP2P');}}>
                        <div class="menu__icon"> <i data-lucide="inbox"></i> </div>
                        <div class="menu__title"> P2P <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Table <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-regular-table.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Regular Table</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-tabulator.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Tabulator</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Overlay <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-modal.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Modal</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-slide-over.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Slide Over</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-notification.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Notification</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-tab.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Tab </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-accordion.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Accordion </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-button.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Button </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-alert.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Alert </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-progress-bar.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Progress Bar </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-tooltip.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Tooltip </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-dropdown.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Dropdown </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-typography.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Typography </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-icon.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Icon </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-loading-icon.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Loading Icon </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="menu" onClick={() => {router.push('../../../admin/adminP2PTerminal');}}>
                        <div class="menu__icon"> <i data-lucide="sidebar"></i> </div>
                        <div class="menu__title"> P2P Terminal <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-regular-form.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Regular Form </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-datepicker.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Datepicker </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-tom-select.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Tom Select </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-file-upload.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> File Upload </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Wysiwyg Editor <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-classic.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Classic</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-inline.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Inline</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-balloon.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Balloon</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-balloon-block.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Balloon Block</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-document.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Document</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-validation.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Validation </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu__devider my-6"></li>
                  <li>
                    <a class="menu" onClick={() => {router.push('../../../admin/betchipAnnouncement/betchipAnnouncement');}}>
                        <div class="menu__icon"> <i data-lucide="inbox"></i> </div>
                        <div class="menu__title"> Betchip Adverts & Notifications <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Table <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-regular-table.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Regular Table</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-tabulator.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Tabulator</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Overlay <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-modal.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Modal</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-slide-over.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Slide Over</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-notification.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Notification</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-tab.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Tab </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-accordion.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Accordion </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-button.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Button </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-alert.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Alert </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-progress-bar.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Progress Bar </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-tooltip.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Tooltip </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-dropdown.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Dropdown </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-typography.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Typography </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-icon.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Icon </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-loading-icon.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Loading Icon </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="menu" onClick={() => {router.push('../../../admin/blockchainNews');}}>
                        <div class="menu__icon"> <i data-lucide="sidebar"></i> </div>
                        <div class="menu__title"> Blockchain News <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-regular-form.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Regular Form </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-datepicker.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Datepicker </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-tom-select.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Tom Select </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-file-upload.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> File Upload </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Wysiwyg Editor <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-classic.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Classic</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-inline.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Inline</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-balloon.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Balloon</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-balloon-block.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Balloon Block</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-document.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Document</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-validation.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Validation </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu__devider my-6"></li>
                     <li>
                    <a class="menu" onClick={() => {router.push('../../../admin/betchipCryptoListing');}}>
                        <div class="menu__icon"> <i data-lucide="inbox"></i> </div>
                        <div class="menu__title"> Betchip Adverts & Notifications <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Table <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-regular-table.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Regular Table</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-tabulator.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Tabulator</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Overlay <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-modal.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Modal</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-slide-over.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Slide Over</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-notification.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Notification</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-tab.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Tab </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-accordion.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Accordion </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-button.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Button </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-alert.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Alert </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-progress-bar.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Progress Bar </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-tooltip.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Tooltip </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-dropdown.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Dropdown </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-typography.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Typography </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-icon.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Icon </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-loading-icon.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Loading Icon </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="menu" onClick={() => {router.push('../../../admin/betchipRecommendedTokens');}}>
                        <div class="menu__icon"> <i data-lucide="sidebar"></i> </div>
                        <div class="menu__title"> Blockchain News <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-regular-form.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Regular Form </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-datepicker.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Datepicker </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-tom-select.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Tom Select </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-file-upload.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> File Upload </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Wysiwyg Editor <i data-lucide="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-classic.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Classic</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-inline.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Inline</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-balloon.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Balloon</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-balloon-block.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Balloon Block</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-document.html" class="menu">
                                        <div class="menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div class="menu__title">Document</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-validation.html" class="menu">
                                <div class="menu__icon"> <i data-lucide="activity"></i> </div>
                                <div class="menu__title"> Validation </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu__devider my-6"></li>
              
                
            </ul>
        </div>
         
          </Fragment>
  )
}

export default AdminSideNavBarMobile