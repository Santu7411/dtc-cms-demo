import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import PublishStatus from '../../fields/publishStatus';

const Feeds: CollectionConfig = {
  slug: 'feeds',
  labels: {
    singular: "Feed",
    plural: "Feeds",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'Wechat MP',
  },
  fields: [
    PublishStatus,
    {
      name: 'title',
      type: 'text',
    },
    SelectTargets,
    {
      type: "tabs", 
      tabs: [
        {
          label: "Content", 
          fields: [
            {
              name: "slides", 
              type: "array", 
              label: "Slides",
              fields: [
                {
                  name: 'relatedSlide', 
                  type: 'relationship', 
                  relationTo: 'slides', 
                  hasMany: true,
                }
              ],
            },
          ]
        },
        {
          label: "References & Comments", 
          fields: [
            {
              name: "referenceAndComments", 
              type: "array", 
              label: "References & Comments",
              fields: [
                {
                  name: 'referenceContent', 
                  type: 'richText', 
                }
              ],
            },
          ]
        }
  ],
},
  ]
}

export default Feeds;