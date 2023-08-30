import { Block } from 'payload/types';

const TransactionTime: Block = {
  slug: 'transactionTime', // required
  labels: {
    singular: "下单时间",
    plural: "下单时间",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      type:'row',
      fields:[
    {
      name: 'operate', // required
      label: "条件",
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: '无规定',
          value: 'none',
        },
        {
          label: '晚于',
          value: 'isAfter',
        },
        {
          label: '早于',
          value: 'isBefore',
        },
        {
          label: '在...之间',
          value: 'isBetween',
        },
        {
          label: '不在...之间',
          value: 'isNotBetween',
        },
        {
          label: '在周几',
          value: 'isDayOfWeek',
        },
        {
          label: '在一个月的第几天',
          value: 'isDayOfMonth',
        },
        {
          label: '在每年的某个月',
          value: 'isMonthOfYear',
        },   
        {
          label: '在每天的某个时间段',
          value: 'isTimeBetween',
        },       
      ],
      admin:{
        width:"40%",
      }
    },
    {
      name:"start",
      label: "开始时间",
      type:"date",
      admin:{
        width:"30%",
        date:{
          pickerAppearance: "dayAndTime",
        },
      }
    }, 
    {
      name:"end",
      label: "结束时间",
      type:"date",
      admin:{
        width:"30%",
        date:{
          pickerAppearance: "dayAndTime",
        },
      }
    }, 
  ],
},
  ]
};


export default TransactionTime;