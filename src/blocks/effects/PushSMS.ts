import { Block } from 'payload/types';

const PushSMS: Block = {
  slug: 'pushSMS', // required
  labels: {
    singular: "推送短消息",
    plural: "推送短消息",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      name: 'content', // required
      label: "推送内容",
      type: 'textarea', // required
    }

  ]
};


export default PushSMS;