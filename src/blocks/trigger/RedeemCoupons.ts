import { Block } from 'payload/types';

const RedeemCoupons: Block = {
  slug: 'redeemCoupons', // required
  labels: {
    singular: "券兑换",
    plural: "券兑换",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      type:'row',
      fields:[
    {
      name:"coupon",
      label: "券",
      type:"relationship",
      hasMany: true,
      relationTo:["coupons"],
      admin:{
        width:"50%",
      }
    },
    {
    name: 'quantity', 
    label: "数量",    
    type: 'number', 
    admin: {
    step: 1,
    width:"50%",
    }
    }
  ],
},
  ]
};


export default RedeemCoupons;