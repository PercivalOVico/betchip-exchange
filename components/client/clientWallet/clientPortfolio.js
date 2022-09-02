import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { coins } from '../../../static/coins'
import ClientCoin from './clientCoin'



const ClientPortfolio = ({  twTokens, sanityTokens, walletAddress   })  => {

      const [walletBalance, setWalletBalance] = useState(0)
  const [sender] = useState(walletAddress)

  const getBalance = async activeTwToken => {
    const balance = await activeTwToken.balanceOf(sender)

    return parseInt(balance.displayValue)
  }

  useEffect(() => {
    const calculateTotalBalance = async () => {
      setWalletBalance(0)

      sanityTokens.map(async token => {
        const currentTwToken = twTokens.filter(
          twToken => twToken.address === token.contractAddress,
        )

        const balance = await getBalance(currentTwToken[0])
        setWalletBalance(prevState => prevState + balance * token.usdPrice)
      })
    }

    if (sanityTokens.length > 0 && twTokens.length > 0) {
      calculateTotalBalance()
    }
  }, [twTokens, sanityTokens])
 // console.log(sanityTokens, 'uyguyguguygyg') 
  //console.log(twTokens , 'percyt')
  // console.log(walletAddress)
  
 console.log(walletBalance)
  return (
    <Fragment>
    
           <div class="col-span-12 mt-6">
                                <div class="intro-y block sm:flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-5">
                                        Assets  {walletBalance.toLocaleString('US')}
                                    </h2>
                                    <div class="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                        <button class="btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" class="hidden sm:block w-4 h-4 mr-2"></i> Export to Excel </button>
                                        <button class="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" class="hidden sm:block w-4 h-4 mr-2"></i> Export to PDF </button>
                                    </div>
                                </div>
                                <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                    <table class="table table-report sm:mt-2">
                                        <thead>
                                            <tr>
                                                <th class="whitespace-nowrap">IMAGE</th>
                                                <th class="whitespace-nowrap">ASSET</th>
                                                <th class="text-center whitespace-nowrap">BALANCE</th>
                                                <th class="text-center whitespace-nowrap">PRICE</th>
                                                <th class="text-center whitespace-nowrap">ALLOCATION</th>
                                                <th class="text-center whitespace-nowrap">ACTIONS</th>
                                            </tr>
                                        </thead>
                                          {coins.map(coin => (
                            <tbody key={coin.name} >
                                            <tr class="intro-x">
                                                <td class="w-40">
                                                    <div class="flex">
                                                        <div class="w-10 h-10 image-fit zoom-in">
                                                            <Image class="tooltip rounded-full" src={coin.logo} alt={coin.name} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="" class="font-medium whitespace-nowrap">{coin.name}</a> 
                                                    <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">{coin.sign}</div>
                                                </td>
                                                <td>
                                                    <a href="" class="font-medium whitespace-nowrap"> {'$'} {coin.balanceUsd}</a> 
                                                    <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">{coin.balanceCoin} {coin.sign}</div>
                                                </td>
                                                
                                                
                                                <td class="w-40"> 
                                                     <div class="text-center"> {'$'}  {coin.priceUsd}</div>
                                                    <div class="flex items-center justify-center text-success" style={{ color: coin.change < 0 ? '#f0616d' : '#26ad75' }} > <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> {coin.change > 0 && '+'}
                                                  {coin.change}%</div>
                                                </td>
                                                <td class="text-center"> {coin.allocation}{'%'} </td>
                                                <td class="table-report__action w-56">
                                                    <div class="flex justify-center items-center">
                                                              <a class="flex items-center text-success" href=""> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> BUY </a>
                                                        <a class="flex items-center text-danger" href=""> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> SELL</a>
                                                        <a class="flex items-center text-warning" href=""> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> P2P </a>
                                                    </div>
                                                </td>
                                            </tr>
                                          
                                        </tbody>
              ))}
                                    </table>
                                </div>
                                <div class="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                    <nav class="w-full sm:w-auto sm:mr-auto">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                            </li>
                                            <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                                            <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <select class="w-20 form-select box mt-3 sm:mt-0">
                                        <option>10</option>
                                        <option>25</option>
                                        <option>35</option>
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                         
    </Fragment>
  )
}

export default ClientPortfolio

