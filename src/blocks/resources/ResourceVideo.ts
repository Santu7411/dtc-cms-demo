import { Block } from 'payload/types';

const ResourceVideo: Block = {
  slug: 'resourceVideo', // required
  labels: {
    singular: "视频",
    plural: "视频",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821102/icon_video_zgunws.png',
  interfaceName: 'resourceVideo', // optional
  fields: [
    // required
    {
      name: 'video', // required
      type: 'upload', // required
      relationTo: 'media', // required
    },
  ],
};


export default ResourceVideo;