import { CollectionConfig } from 'payload/types';

const Tiers: CollectionConfig = {
  slug: 'tiers',
  labels: {
    singular: "Target",
    plural: "Targets",
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