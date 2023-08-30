import { Block } from 'payload/types';

const PushMpHints: Block = {
  slug: 'pushMpHints', // required
  labels: {
    singular: "推送小程序提示",
    plural: "推送小程序提示",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      name: 'content', // required
      label: "推送内容",
      type: 'textarea', // required
    },
    {
      type:'row',
      fields:[
        {
          name: 'hasButton', // required
          type: 'checkbox', // required
          label: '是否有按钮',
          defaultValue: false,
          admin:{
            width:"20%",
          }
        },
    {
      name: 'buttonText', // required
      label: "按钮文字",
      type: 'text', // required
      admin:{
        width:"30%",
      }
    },
    {
      name: 'buttonLink', // required
      label: "按钮链接",
      type: 'text', // required
      admin:{
        width:"50%",
      }
    }
  ],
},
{
  type:'row',
  fields:[
{
  name:"places",
  label: "出现页面",
  type:"relationship",
  relationTo:["pages"],
  hasMany: true,
  admin:{
    width:"70%",
  }
},
{
  name:"dueDays",
  label: "有效期(天)",
  type:"number",
  admin:{
    step: 1,
    width:"30%",
  }
}
],
},
  ]
};


export default PushMpHints;