import { Block } from 'payload/types';

const ResourceFile: Block = {
  slug: 'resourceFile', // required
  labels: {
    singular: "文件",
    plural: "文件",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821100/icon_file_sx2p3c.png',
  interfaceName: 'resourceFile', // optional
  fields: [
    // required
    {
      name: 'file', // required
      type: 'upload', // required
      relationTo: 'media', // required
    },
  ],
};


export default ResourceFile;