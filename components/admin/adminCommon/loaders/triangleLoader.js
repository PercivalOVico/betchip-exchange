import React, { Fragment } from 'react'

const TriangleLoader = () => {
  return (
    <Fragment>
        
          <div class="col-span-12 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
                        <i data-loading-icon="ball-triangle" class="w-8 h-8"></i> 
                        <div class="text-center text-xs mt-2">LOADING...</div>
                    </div>
             
    </Fragment>
  )
}

export default TriangleLoader