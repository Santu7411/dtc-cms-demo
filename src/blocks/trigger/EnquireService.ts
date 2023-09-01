import { Block } from 'payload/types';

const EnquireService: Block = {
  slug: 'enquireService', // required
  labels: {
    singular: "咨询",
    plural: "咨询",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      type:'row',
      fields:[
        {
          name: 'topicOperate', // required
          label: "咨询话题",
          type: 'select', // required
          hasMany: false,
          defaultValue:'any',
          options: [
            {
              label: '任何',
              value: 'any',
            },
            {
              label: '符合这些标签之一',
              value: 'isOneOf',
            },
            {
              label: '除这些标签之外',
              value: 'isNotOneOf',
            },       
          ],
          admin:{
            width:"180px",
          }
        },
    {
      name:"topic",
      label: "话题",
      type:"relationship",
      hasMany: true,
      relationTo:["categories","products"],
      admin:{
        width:"60%",
        condition: (data, siblingData, { user }) => {
          if (siblingData.topicOperate=='any') {
            return false;
          } else {
            return true;
          }
        }, 
      }
    }

  ],
},
{
  type:'row',
  fields:[
    {
      name: 'consultantOperate', // required
      label: "专属客服",
      type: 'select', // required
      hasMany: false,
      defaultValue:'any',
      options: [
        {
          label: '任何',
          value: 'any',
        },
        {
          label: '符合这些标签之一',
          value: 'isOneOf',
        },
        {
          label: '除这些标签之外',
          value: 'isNotOneOf',
        },       
      ],
      admin:{
        width:"180px",
      }
    },
{
  name:"consultant",
  label: "客服",
  type:"relationship",
  hasMany: true,
  relationTo:["categories","products"],
  admin:{
    width:"60%",
    condition: (data, siblingData, { user }) => {
      if (siblingData.consultantOperate=='any') {
        return false;
      } else {
        return true;
      }
    }, 
  }
}

],
},
  ]
};


export default EnquireService;