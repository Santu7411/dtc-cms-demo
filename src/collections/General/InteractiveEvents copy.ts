import { CollectionConfig } from 'payload/types';

const InteractiveEvents: CollectionConfig = {
  slug: 'interactiveEvents',
  labels: {
    singular: "Interactive Event",
    plural: "Interactive Events",
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

export default InteractiveEvents;