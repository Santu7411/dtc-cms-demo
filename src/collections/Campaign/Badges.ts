import { CollectionConfig } from 'payload/types';

const Badges: CollectionConfig = {
  slug: 'badges',
  admin: {
    useAsTitle: 'name',
    group: 'Loyalty Engine',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default Badges;