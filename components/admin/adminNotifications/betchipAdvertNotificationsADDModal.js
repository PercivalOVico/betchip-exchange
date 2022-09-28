import React, { Fragment, useEffect } from 'react'
 


const BetchipAdvertNotificationsADDModal = () => {


  
  return (
    <Fragment>
           
                          
                            
                                   
                            
                                    <div id="BetchipAdvertNotificationsADDModal" class="modal" data-tw-backdrop="static" tabindex="-1" aria-hidden="true">
                                        <div class="modal-dialog  modal-xl">
                                            <div class="modal-content">
                                             <a data-tw-dismiss="modal" href="javascript:;"> <i data-lucide="x" class="w-8 h-8 text-slate-400"></i> </a>
                                                <div class="modal-body px-5 py-10">
                                                    <div class="text-center">
                                                        

                                                      <input type="text" class="form-control form-control-lg" placeholder="NOTIFICATION HEADLINE" aria-label=".form-control-lg example"/> 
                                                        <br/>
                                                        <br/>
                                                          <form data-file-types="image/jpeg|image/png|image/jpg" action="/file-upload" class="dropzone">
                                                           <div class="fallback">
                                                            <input name="file" type="file" /> 
                                                            </div> <div class="dz-message" data-dz-message>
                                                             <div class="text-lg font-medium">Drop Notification ICON here or click to upload.</div>
                                                              <div class="text-slate-500"> This is an ICON dropzone. Selected files are <span class="font-medium">not</span> actually uploaded. </div>
                                                               </div> 
                                                          </form> 

                                                         
                                                         <input type="text" class="form-control mt-2" placeholder="NOTIFICATION TITLE" aria-label="default input example"/>
                                                         <br/>
                                                        
                                                         <form action="/file-upload" class="dropzone"> 
                                                         <div class="fallback"> 
                                                         <input name="file" type="file" multiple/> 
                                                         </div> 
                                                         <div class="dz-message" data-dz-message> 
                                                         <div class="text-lg font-medium">Drop Notification IMAGE here or click to upload.</div> 
                                                         <div class="text-slate-500"> This is just an IMAGE dropzone. Selected files are <span class="font-medium">not</span> actually uploaded. </div>
                                                          </div> 
                                                         </form> 


                                                         <div class="mt-3">
                                        <label for="regular-form-2" class="form-label">CONTENT</label>
                                        <input id="regular-form-2" type="text" class="form-control form-control-rounded" placeholder="Rounded"/>
                                    </div>
                                                                                        
                                                        <button type="button" data-tw-dismiss="modal" class="btn btn-primary w-24">Ok</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                            
    </Fragment>
  )
}

export default BetchipAdvertNotificationsADDModal