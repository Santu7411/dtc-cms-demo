import { Block } from 'payload/types';
import QuantutyOfCategory from '../trigger/QuantityOfCategory';
import QuantutyOfProduct from '../trigger/QuantityOfProduct';
import QuantutyOfSku from '../trigger/QuantityOfSku';
import TransactionTotal from '../trigger/TransactionTotal';
import GiveGWPs from '../effects/GiveGWPs';
import GiveGifts from '../effects/GiveGifts';
import GiveCoupons from '../effects/GiveCoupons';
import EngagementLimits from '../../fields/engagementLimits';

const CartPromotions: Block = {
  slug: 'cartPromotions', // required
  labels: {
    singular: "购物车实时Offer",
    plural: "购物车实时Offer",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821100/icon_file_sx2p3c.png',
  fields: [
    // required
    
    {
      name: 'triggers', // required
      type: 'blocks', // required
      label: '触发条件',
      blocks: [
        QuantutyOfCategory, QuantutyOfProduct, QuantutyOfSku, TransactionTotal
      ],
    },
    {
      name: 'effects', // required
      type: 'blocks', // required
      label: '结果',
      blocks: [
        GiveGWPs, GiveGifts, GiveCoupons
      ],
    },
    EngagementLimits,
  ],
};


export default CartPromotions;