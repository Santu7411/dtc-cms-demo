import { Block } from 'payload/types';

const AttrRichText: Block = {
  slug: 'attrRichText', // required
  labels: {
    singular: "Rich Text",
    plural: "Rich Text",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821100/icon_file_sx2p3c.png',
  fields: [
    {
      type:'row',
      fields:[
        {
          name: 'attribute', 
          type: 'relationship', // required
          relationTo: ['attributes'], // required
          hasMany: false,
          admin:{
            width:"40%",
          }
        },
    {
      name: "attributeValue",
      type: "richText",
      admin:{
        width:"60%",
      }
    },
],
},
  ]
};


export default AttrRichText