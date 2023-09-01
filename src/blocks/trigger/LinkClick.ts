import { Block } from 'payload/types';

const LinkClick: Block = {
  slug: 'linkClick', // required
  labels: {
    singular: "链接点击",
    plural: "链接点击",
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
      name:"link",
      label: "链接",
      type:"relationship",
      hasMany: true,
      relationTo:["categories","products"],
      admin:{
        width:"60%",
        condition: (data, siblingData, { user }) => {
          if (siblingData.operate=='any') {
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


export default LinkClick;