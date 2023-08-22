import { CollectionConfig } from 'payload/types';

const Channels: CollectionConfig = {
  slug: 'channels',
  labels: {
    singular: "channel",
    plural: "channels",
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

export default Channels;