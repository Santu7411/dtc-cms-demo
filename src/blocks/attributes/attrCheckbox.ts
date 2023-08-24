import { Block } from 'payload/types';

const AttrCheckbox: Block = {
  slug: 'attrCheckbox', // required
  labels: {
    singular: "Checkbox",
    plural: "Checkbox",
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
            width:"60%",
          }
        },
    {
      name: "attributeValue",
      label:'Value',
      type: "checkbox",
      defaultValue: false,
      admin:{
        width:"20%",
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


export default AttrCheckbox;