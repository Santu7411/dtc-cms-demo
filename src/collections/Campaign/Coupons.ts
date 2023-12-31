import { CollectionConfig } from 'payload/types';

const Coupons: CollectionConfig = {
  slug: 'coupons',
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

export default Coupons;