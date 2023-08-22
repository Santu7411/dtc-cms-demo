import { CollectionConfig } from 'payload/types';

const Collections: CollectionConfig = {
  slug: 'collections',
  admin: {
    useAsTitle: 'name',
    group: 'PIM',
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
}

export default Collections;