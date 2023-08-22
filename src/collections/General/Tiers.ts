import { CollectionConfig } from 'payload/types';

const Tiers: CollectionConfig = {
  slug: 'tiers',
  labels: {
    singular: "TTier",
    plural: "Tiers",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'General Settings',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ],
}

export default Tiers;