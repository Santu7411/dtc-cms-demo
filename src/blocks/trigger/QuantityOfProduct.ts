import { Block } from 'payload/types';

const QuantutyOfProduct: Block = {
  slug: 'quantutyOfProduct', // required
  labels: {
    singular: "买某个商品",
    plural: "买某个商品",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      type:'row',
      fields:[
    {
      name:"product",
      label: "相关商品",
      type:"relationship",
      hasMany: true,
      relationTo:["products"],
      admin:{
        width:"50%",
      }
    }, 
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
        width:"15%",
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
        width:"15%",
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
        width:"20%",
              style: {
                alignSelf: 'flex-end',
              },
      }
    }
  ],
},
  ]
};


export default QuantutyOfProduct;