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
          label:'Attribute',
          type: 'relationship', // required
          relationTo: ['attributes'], // required
          hasMany: false,
          admin:{
            width:"30%",
          }
        },
    {
      name: "attributeValue",
      label:'Text',
      type: "richText",
      admin:{
        width:"50%",
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


export default AttrRichText