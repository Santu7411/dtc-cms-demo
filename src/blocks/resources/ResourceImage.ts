import { Block } from 'payload/types';

const ResourceImage: Block = {
  slug: 'resourceImage', // required
  labels: {
    singular: "图片",
    plural: "图片",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821101/icon_image_ffjewx.png',
  interfaceName: 'resourceImage', // optional
  fields: [
    // required
    {
      name: 'image', // required
      type: 'upload', // required
      relationTo: 'media', // required
    },
  ],
};


export default ResourceImage;