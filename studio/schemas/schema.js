// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import { coinSchema } from './coinSchema';
import {p2pAD} from './p2pAD';
import {user} from './user';
import {p2pTrade} from './p2pTrade';
import {p2pCart} from './p2pCart';
import {paymentResult} from './paymentResult';
import {destinationAddress} from './destinationAddress';
import { announcement } from './announcement';
import { announcementListing } from './announcementListing';
import { admin } from './admin';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default', // Then proceed to concatenate our document type  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    coinSchema,
    p2pAD,
    user,
    p2pCart,
    p2pTrade,
    paymentResult,
    destinationAddress,
    announcement,
    announcementListing,
    admin,
    
  
  ]), /* Your types here! */
})
