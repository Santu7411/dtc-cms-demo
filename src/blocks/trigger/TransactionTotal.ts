import { Block } from 'payload/types';

const TransactionTotal: Block = {
  slug: 'transactionTotal', // required
  labels: {
    singular: "订单总计",
    plural: "订单总计",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      type:'row',
      fields:[
    {
      name: 'condition', // required
      label: "门槛",
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: '件数',
          value: 'quantity',
        },
        {
          label: '价值',
          value: 'value',
        },
      ],
      admin:{
        width:"30%",
              style: {
                alignSelf: 'flex-end',
              },
      }
    },
    {
      name: 'operate', // required
      label: "条件",
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: '=',
          value: 'equal',
        },
        {
          label: '<>',
          value: 'not_equal',
        },
        {
          label: '>',
          value: 'greater',
        },
        {
          label: '>=',
          value: 'greater_equal',
        },
        {
          label: '<',
          value: 'less',
        },
        {
          label: '=<',
          value: 'less_equal',
        },
      ],
      admin:{
        width:"30%",
              style: {
                alignSelf: 'flex-end',
              },
      }
    },
    {
      name: 'value', // required
      label: "值",
      type: 'number', // required
      admin:{
        step: 1,
        width:"40%",
              style: {
                alignSelf: 'flex-end',
              },
      }
    }
  ],
},
  ]
};


export default TransactionTotal;