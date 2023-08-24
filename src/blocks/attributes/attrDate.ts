import { Block } from 'payload/types';

const AttrDate: Block = {
  slug: 'attrDate', // required
  labels: {
    singular: "Date",
    plural: "Date",
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
      name: "attributeValue",
      type: "date",
      admin:{
        width:"50%",
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyy",
        },
      }
    },
],
},
  ]
};


export default AttrDate;