import { Block } from 'payload/types';

const EventInteractive: Block = {
  slug: 'eventInteractive', // required
  labels: {
    singular: "互动事件",
    plural: "互动事件",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      name:"eventInteractive",
      label: "事件",
      type:"relationship",
      hasMany: true,
      relationTo:["interactiveEvents"],
    }, 
  ]
};


export default EventInteractive;