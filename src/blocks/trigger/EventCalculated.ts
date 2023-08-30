import { Block } from 'payload/types';

const EventCalculated: Block = {
  slug: 'eventCalculated', // required
  labels: {
    singular: "CDP计算事件",
    plural: "CDP计算事件",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      name:"eventCalculated",
      label: "事件",
      type:"relationship",
      hasMany: true,
      relationTo:["calculatedEvents"],
    }, 
  ]
};


export default EventCalculated;