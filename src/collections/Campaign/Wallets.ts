import { CollectionConfig } from 'payload/types';

const Wallets: CollectionConfig = {
  slug: 'wallets',
  labels: {
    singular: "Wallet",
    plural: "Wallets",
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

export default Wallets;