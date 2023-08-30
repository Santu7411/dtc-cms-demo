import { Block } from 'payload/types';

const AttrFile: Block = {
  slug: 'attrFile', // required
  labels: {
    singular: "File",
    plural: "Files",
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
            width:"25%",
          }
        },
    {
      name: "attributeValue",
      label:'File Name',
      type: "text",
      admin:{
        width:"25%",
      }
    },
    {
      name: 'attributeFile', 
      label:'File',
      type: 'upload', 
      relationTo: 'media', 
      admin:{
        width:"30%",
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


export default AttrFile;