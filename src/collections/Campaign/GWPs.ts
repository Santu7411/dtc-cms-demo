import { CollectionConfig } from 'payload/types';

const GWPs: CollectionConfig = {
  slug: 'gwps',
  labels: {
    singular: "GWP",
    plural: "GWPs",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'Rewards',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ],
}

export default GWPs;