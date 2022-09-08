import React from 'react'

const Alert = () => {
  return (
    <div class="alert alert-primary alert-dismissible show flex items-center mb-2" role="alert">
     <i data-lucide="alert-circle" class="w-6 h-6 mr-2"></i> Awesome alert with icon
      <button type="button" class="btn-close text-white" data-tw-dismiss="alert" aria-label="Close"> 
      <i data-lucide="x" class="w-4 h-4"></i> </button> 
      </div>
  )
}

export default Alert