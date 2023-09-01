import { Block } from 'payload/types';

const RedeemPoints: Block = {
  slug: 'redeemPoints', // required
  labels: {
    singular: "积点兑换",
    plural: "积点兑换",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      type:'row',
      fields:[
    {
      name:"wallet",
      label: "积点类型",
      type:"relationship",
      hasMany: true,
      relationTo:["wallets"],
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


export default RedeemPoints;