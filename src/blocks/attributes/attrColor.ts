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
            width:"40%",
          }
        },
    {
      name: "attributeValue",
      label: 'Value',
      type: "text",
      admin:{
        width:"30%",
      }
    },
    {
      name: "attributeColor",
      label: 'Color',
      type: "text",
      admin:{
        width:"30%",
      }
    },
],
},
  ]
};


export default AttrColor;