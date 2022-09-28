import React, { Fragment } from 'react'

const AdminChartAnalytics = () => {
  return (
    <Fragment>
           
                            <div class="col-span-12 lg:col-span-6 mt-8">
                                <div class="intro-y block sm:flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-5">
                                        Sales Report
                                    </h2>
                                    <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                                        <i data-lucide="calendar" class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"></i> 
                                        <input type="text" class="datepicker form-control sm:w-56 box pl-10"/>
                                    </div>
                                </div>
                                <div class="intro-y box p-5 mt-12 sm:mt-5">
                                    <div class="flex flex-col md:flex-row md:items-center">
                                        <div class="flex">
                                            <div>
                                                <div class="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">$15,000</div>
                                                <div class="mt-0.5 text-slate-500">This Month</div>
                                            </div>
                                            <div class="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                                            <div>
                                                <div class="text-slate-500 text-lg xl:text-xl font-medium">$10,000</div>
                                                <div class="mt-0.5 text-slate-500">Last Month</div>
                                            </div>
                                        </div>
                                        <div class="dropdown md:ml-auto mt-5 md:mt-0">
                                            <button class="dropdown-toggle btn btn-outline-secondary font-normal" aria-expanded="false" data-tw-toggle="dropdown"> Filter by Category <i data-lucide="chevron-down" class="w-4 h-4 ml-2"></i> </button>
                                            <div class="dropdown-menu w-40">
                                                <ul class="dropdown-content overflow-y-auto h-32">
                                                    <li><a href="" class="dropdown-item">PC & Laptop</a></li>
                                                    <li><a href="" class="dropdown-item">Smartphone</a></li>
                                                    <li><a href="" class="dropdown-item">Electronic</a></li>
                                                    <li><a href="" class="dropdown-item">Photography</a></li>
                                                    <li><a href="" class="dropdown-item">Sport</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="report-chart">
                                        <div class="h-[275px]">
                                            <canvas id="report-line-chart" class="mt-6 -mb-6"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                                <div class="intro-y flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-5">
                                        Weekly Top Seller
                                    </h2>
                                    <a href="" class="ml-auto text-primary truncate">Show More</a> 
                                </div>
                                <div class="intro-y box p-5 mt-5">
                                    <div class="mt-3">
                                        <div class="h-[213px]">
                                            <canvas id="report-pie-chart"></canvas>
                                        </div>
                                    </div>
                                    <div class="w-52 sm:w-auto mx-auto mt-8">
                                        <div class="flex items-center">
                                            <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                            <span class="truncate">Crypto</span> <span class="font-medium ml-auto">62%</span> 
                                        </div>
                                        <div class="flex items-center mt-4">
                                            <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                                            <span class="truncate">NFTs</span> <span class="font-medium ml-auto">33%</span> 
                                        </div>
                                        <div class="flex items-center mt-4">
                                            <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                                            <span class="truncate">Fiat</span> <span class="font-medium ml-auto">10%</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                                <div class="intro-y flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-5">
                                        Sales Report
                                    </h2>
                                    <a href="" class="ml-auto text-primary truncate">Show More</a> 
                                </div>
                                <div class="intro-y box p-5 mt-5">
                                    <div class="mt-3">
                                        <div class="h-[213px]">
                                            <canvas id="report-donut-chart"></canvas>
                                        </div>
                                    </div>
                                    <div class="w-52 sm:w-auto mx-auto mt-8">
                                        <div class="flex items-center">
                                            <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                            <span class="truncate">Completed P2P trade</span> <span class="font-medium ml-auto">62%</span> 
                                        </div>
                                        <div class="flex items-center mt-4">
                                            <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                                            <span class="truncate">Pending P2P Trades</span> <span class="font-medium ml-auto">33%</span> 
                                        </div>
                                        <div class="flex items-center mt-4">
                                            <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                                            <span class="truncate">Canceled P2P Trades</span> <span class="font-medium ml-auto">10%</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
    </Fragment>
  )
}

export default AdminChartAnalytics