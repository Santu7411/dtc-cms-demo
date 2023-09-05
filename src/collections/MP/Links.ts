import { CollectionConfig } from 'payload/types';

const Links: CollectionConfig = {
  slug: 'links',
  labels: {
    singular: "Link",
    plural: "Links",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'Wechat MP',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'url',
      type: 'text',
    }
  ],
}

export default Links;