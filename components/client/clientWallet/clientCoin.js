

import Image from 'next/image'
// import Icon from 'react-crypto-icons'

const ClientCoin = ({ coin }) => {
  return (
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
                                                
                                                <td class="text-center"> {'$'}  {coin.priceUsd}</td>
                                                <td class="w-40"> 
                                                    <div class="flex items-center justify-center text-success" style={{ color: coin.change < 0 ? '#f0616d' : '#26ad75' }} > <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> {coin.change > 0 && '+'}
                                                  {coin.change}%</div>
                                                </td>
                                                <td class="table-report__action w-56">
                                                    <div class="flex justify-center items-center">
                                                              <a class="flex items-center text-success" href=""> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> BUY </a>
                                                        <a class="flex items-center text-danger" href=""> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> SELL</a>
                                                        <a class="flex items-center text-warning" href=""> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> P2P </a>
                                                    </div>
                                                </td>
                                            </tr>
                                          
                                        </tbody>
  )
}

export default ClientCoin
