import Image from 'next/image';
import NextLink from 'next/link';
import { Fragment, useContext, useEffect, useState } from 'react';
import classes from '../../lib/classes';
import client from '../../lib/client';
import { urlFor, urlForThumbnail } from '../../lib/image';
import { Store } from '../../lib/Store';
import axios from 'axios';
import { useRouter } from 'next/router';
import Modal from 'react-modal'
import TriangleLoader from '../../components/common/loaders/triangleLoader';
import Alert from '../../components/common/alert';
//import { p2pAD } from '../../studio/schemas/p2pAD';

Modal.setAppElement('#__next')
P2PTradeModal

export default function P2PTradeModal(props) {
  const router = useRouter();
  const { slug } = props;

  
  const [state, setState] = useState({
    p2pAD: null,
    loading: true,
    error: '',
  });
  const { p2pAD, loading, error } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const p2pAD = await client.fetch(
            `
            *[_type == "p2pAD" && slug.current == $slug][0]`,
          { slug }
        );
       setState({ ...state, p2pAD, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);

  
  return (
    <Fragment>                   
                 
         
                           <div id="p2pTradeModal" class="modal" tabindex="-1" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                {loading ? (
                     <TriangleLoader />
                     ) : error ? (
                    <Alert error={error} />
                    ) : ( <>
                                                <div class="modal-header">
                                                    <h2 class="font-medium text-base mr-auto">
                                                        Broadcast Message 
                                                    </h2>
                                                    <button class="btn btn-outline-secondary hidden sm:flex"> <i data-lucide="file" class="w-4 h-4 mr-2"></i> Download Docs </button>
                                                    <div class="dropdown sm:hidden">
                                                        <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i> </a>
                                                        <div class="dropdown-menu w-40">
                                                            <ul class="dropdown-content">
                                                                <li>
                                                                    <a href="javascript:;" class="dropdown-item"> <i data-lucide="file" class="w-4 h-4 mr-2"></i> Download Docs </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
                                                    <div class="col-span-12 sm:col-span-6">
                                                        <label for="modal-form-1" class="form-label">from</label>
                                                        <input id="modal-form-1" type="text" class="form-control" placeholder="example@gmail.com"/>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6">
                                                        <label for="modal-form-2" class="form-label">To</label>
                                                        <input id="modal-form-2" type="text" class="form-control" placeholder="example@gmail.com"/>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6">
                                                        <label for="modal-form-3" class="form-label">Subject</label>
                                                        <input id="modal-form-3" type="text" class="form-control" placeholder="Important Meeting"/>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6">
                                                        <label for="modal-form-4" class="form-label">Has the Words</label>
                                                        <input id="modal-form-4" type="text" class="form-control" placeholder="Job, Work, Documentation"/>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6">
                                                        <label for="modal-form-5" class="form-label">Doesn't Have</label>
                                                        <input id="modal-form-5" type="text" class="form-control" placeholder="Job, Work, Documentation"/>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6">
                                                        <label for="modal-form-6" class="form-label">Size</label>
                                                        <select id="modal-form-6" class="form-select">
                                                            <option>10</option>
                                                            <option>25</option>
                                                            <option>35</option>
                                                            <option>50</option>
                                                        </select>
                                                    </div>
                                                </div>
                                               
                                                <div class="modal-footer">
                                                    <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-20 mr-1">Cancel</button>
                                                    <button type="button" class="btn btn-primary w-20">Send</button>
                                                </div></>
                                               ) }
                                            </div>
                                        </div>
                                    </div>
                                 
     
    </Fragment>
  );
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}
