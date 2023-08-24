import { Block } from 'payload/types';

const AttrSingleSelect: Block = {
  slug: 'attrSingleSelect', // required
  labels: {
    singular: "Single Select",
    plural: "Single Select",
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
            width:"50%",
          }
        },
        {
          name: 'attributeValue', 
          type: 'relationship', // required
          relationTo: ['options'], // required
          hasMany: false,
          admin:{
            width:"50%",
          }
        },
],
},
  ]
};


export default AttrSingleSelect;