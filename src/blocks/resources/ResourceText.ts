import { Block } from 'payload/types';

const ResourceText: Block = {
  slug: 'resourceText', // required
  labels: {
    singular: "文字",
    plural: "文字",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  interfaceName: 'resourceText', // optional
  fields: [
    // required
    {
      name: 'text',
      type: 'richText',
    },
  ],
};


export default ResourceText;