import { CollectionConfig } from 'payload/types';

const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: "Page",
    plural: "Pages",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'MP CMS',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ],
}

export default Pages;