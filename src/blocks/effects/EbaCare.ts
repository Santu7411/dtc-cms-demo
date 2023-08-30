import { Block } from 'payload/types';

const EbaCare: Block = {
  slug: 'ebaCare', // required
  labels: {
    singular: "EBA客户关怀",
    plural: "EBA客户关怀",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      name: 'content', // required
      label: "客户关怀话术与资料",
      type: 'richText', // required
    }

  ]
};


export default EbaCare;