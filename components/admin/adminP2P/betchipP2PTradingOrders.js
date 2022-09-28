import React, { Fragment } from 'react'
import NextLink from 'next/link'
import { urlForThumbnail } from '../../../lib/image'
import { p2pAD } from '../../../studio/schemas/p2pAD'
import P2PTradeModal from '../../../pages/p2pAD/[slug]'
import Image from 'next/image'
//href= {`/?slug=${p2pAD.slug}`} as={`/p2pAD/${p2pAD.slug}`} passHref>
//href={`/p2pAD/${p2pAD.slug}`} passHref>
const BetchipP2PTradingOrders = ({p2pAD}) => {
  return (
    <Fragment>
        <NextLink href= {`/?slug=${p2pAD.slug}`} as={`/p2pAD/${p2pAD.slug}`} passHref>
               <tr class="intro-x">
                                                <td class="w-40">
                                                    <div class="flex">
                                                        <div class="w-10 h-10 image-fit zoom-in">
                                                            <Image class="tooltip rounded-full" src={p2pAD.image} alt={p2pAD.name} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="" class="font-medium whitespace-nowrap">{p2pAD.name}</a> 
                                                    <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">{p2pAD.numReviews}</div>
                                                </td>
                                                <td>
                                                    <a href="" class="font-medium whitespace-nowrap"> {'$'} {p2pAD.price}</a> 
                                                    <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">{p2pAD.title} {p2pAD.name}</div>
                                                </td>
                                                
                                                
                                                <td class="w-40"> 
                                                     <div class="text-center"> {'$'}  {p2pAD.price}</div>
                                                    <div class="flex items-center justify-center text-success" style={{ color: p2pAD.change < 0 ? '#f0616d' : '#26ad75' }} > <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> {p2pAD.change > 0 && '+'}
                                                  {p2pAD.Category}%</div>
                                                </td>
                                                <td class="text-center"> {p2pAD.allocation}{'%'} </td>
                                                <td class="table-report__action w-56">
                                                    <div class="flex justify-center items-center">
                                                        
                                                        <button class="btn btn-pending w-32 mr-2 mb-2" type="button"  data-tw-toggle="modal" data-tw-target="#p2pTradeModal"> <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> TRADE<P2PTradeModal p2pAD={p2pAD} /></button> 
                                                      
                                                    </div>
                                                </td>
                                            </tr>
                        </NextLink>
    </Fragment>
  )
}

export default BetchipP2PTradingOrders