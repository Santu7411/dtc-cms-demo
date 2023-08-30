import { Block } from 'payload/types';

const AttrColor: Block = {
  slug: 'attrColor', // required
  labels: {
    singular: "Color",
    plural: "Color",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821100/icon_file_sx2p3c.png',
  fields: [
    {
      type:'row',
      fields:[
        {
          name: 'attribute', 
          label: 'Attribute',
          type: 'relationship', // required
          relationTo: ['attributes'], // required
          hasMany: false,
          admin:{
            width:"30%",
          }
        },
    {
      name: "attributeValue",
      label: 'Color Name',
      type: "text",
      admin:{
        width:"25%",
      }
    },
    {
      name: "attributeColor",
      label: 'Color',
      type: "text",
      admin:{
        width:"25%",
      }
    },
    {
      name: "isHidden",
      label:'Hidden?',
      type: "checkbox",
      defaultValue: false,
      admin:{
        width:"20%",
      }
    },
],
},
  ]
};


export default AttrColor;