import { CollectionConfig } from 'payload/types';

const Assets: CollectionConfig = {
  slug: 'assets',
  labels: {
    singular: "Asset",
    plural: "Assets",
  },    
  admin: {
listSearchableFields:['title'],
    group: 'MP CMS',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ],
}

export default Assets;