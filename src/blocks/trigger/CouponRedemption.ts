import { Block } from 'payload/types';

const CouponRedemption: Block = {
  slug: 'couponRedemption', // required
  labels: {
    singular: "使用优惠券",
    plural: "使用优惠券",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      name:"couponRedemption",
      label: "事件",
      type:"relationship",
      hasMany: true,
      relationTo:["coupons"],
    }
  ]
};


export default CouponRedemption;