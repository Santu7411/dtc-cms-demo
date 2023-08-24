import { Block } from 'payload/types';

const AttrImage: Block = {
  slug: 'attrImage', // required
  labels: {
    singular: "Image",
    plural: "Images",
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
            width:"30%",
          }
        },
    {
      name: "attributeValue",
      type: "text",
      admin:{
        width:"30%",
      }
    },
    {
      name: 'attributeImage', 
      type: 'upload', 
      relationTo: 'media', 
      admin:{
        width:"40%",
      }
    },
],
},
  ]
};


export default AttrImage;