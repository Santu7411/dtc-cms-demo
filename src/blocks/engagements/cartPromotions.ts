import { Block } from 'payload/types';
import QuantutyOfCategory from '../trigger/QuantityOfCategory';
import QuantutyOfProduct from '../trigger/QuantityOfProduct';
import QuantutyOfSku from '../trigger/QuantityOfSku';
import TransactionTotal from '../trigger/TransactionTotal';
import GiveGWPs from '../effects/GiveGWPs';
import GiveGifts from '../effects/GiveGifts';
import GiveCoupons from '../effects/GiveCoupons';

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
    {
      name: "limits", // required
      type: "group", // required
      label: "限制",
      fields: [
        {
          type:'row',
          fields:[
            {
              name: 'unitsLimit', // required
              label: "奖励总数限制",
              type: 'select', // required
              hasMany: false,
              options: [
                {
                  label: '无规定',
                  value: 'unlimited',
                },
                {
                  label: '每天',
                  value: 'perDay',
                },
                {
                  label: '每小时',
                  value: 'perHour',
                },
                {
                  label: '每周',
                  value: 'perWeek',
                },
                {
                  label: '每月',
                  value: 'perMonth',
                },
                {
                  label: '每年',
                  value: 'perYear',
                },
                {
                  label: '总计',
                  value: 'inTotal',
                },       
              ],
              admin:{
                width:"50%",
              }
            },
            {
              name: 'units', // required
              type: 'number', // required
              admin: {
                step: 1,
                width:"50%",
              }
            }
  ]
},
{
  type:'row',
  fields:[
    {
      name: 'unitsLimitPerMember', // required
      label: "每人奖励数量限制",
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: '无规定',
          value: 'unlimited',
        },
        {
          label: '每天',
          value: 'perDay',
        },
        {
          label: '每小时',
          value: 'perHour',
        },
        {
          label: '每周',
          value: 'perWeek',
        },
        {
          label: '每月',
          value: 'perMonth',
        },
        {
          label: '每年',
          value: 'perYear',
        },
        {
          label: '总计',
          value: 'inTotal',
        },       
      ],
      admin:{
        width:"50%",
      }
    },
    {
      name: 'units', // required
      type: 'number', // required
      admin: {
        step: 1,
        width:"50%",
      }
    }
]
},
{
type:'row',
fields:[
{
name: 'engagementLimitPerMember', // required
label: "每人参与限制",
type: 'select', // required
hasMany: false,
options: [
{
  label: '无规定',
  value: 'unlimited',
},
{
  label: '每天',
  value: 'perDay',
},
{
  label: '每小时',
  value: 'perHour',
},
{
  label: '每周',
  value: 'perWeek',
},
{
  label: '每月',
  value: 'perMonth',
},
{
  label: '每年',
  value: 'perYear',
},
{
  label: '总计',
  value: 'inTotal',
},       
],
admin:{
width:"50%",
}
},
{
name: 'units', // required
type: 'number', // required
admin: {
step: 1,
width:"50%",
}
}
]
},
  ]
    },
  ],
};


export default CartPromotions;