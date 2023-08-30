import { CollectionConfig } from 'payload/types';

const Gifts: CollectionConfig = {
  slug: 'gifts',
  admin: {
    useAsTitle: 'name',
    group: 'Rewards',
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

export default Gifts;