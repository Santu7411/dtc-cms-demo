import { CollectionConfig } from 'payload/types';

const Ebas: CollectionConfig = {
  slug: 'ebas',
  labels: {
    singular: "EBA",
    plural: "EBAs",
  },    
  admin: {
    useAsTitle: 'ebaName',
    group: 'General Settings',
  },
  fields: [
    {
      name: 'thumbnail', 
      type: 'upload', 
      relationTo: 'media',
    },
    {
      name: 'ebaName',
      type: 'text',
    },
    {
      name: 'ebaId',
      type: 'text',
    }

  ],
}

export default Ebas;