import { CollectionConfig } from 'payload/types';

const Options: CollectionConfig = {
  slug: 'options',
  labels: {
    singular: "Option",
    plural: "Options",
  }, 
  admin: {
    useAsTitle: 'optionLabel',
    group: 'PIM',
    hidden: true,
  },
     fields:[
      {
        name: "optionLabel",
        label: "名称", 
        type: "text",
      } ,     
    ],
}

export default Options;