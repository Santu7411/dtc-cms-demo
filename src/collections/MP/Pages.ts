import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import PublishStatus from '../../fields/publishStatus';
import ContentSchedule from '../../fields/contentSchedule';

const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: "Page",
    plural: "Pages",
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
    {
      type: "tabs", 
      tabs: [
        {
          label: "Content Plan", 
          fields: [
            {
              name: "contentPlan", 
              type: "array", 
              label: "Content",
              fields: [
                SelectTargets,
                ContentSchedule,
                {
                  name: 'content', 
                  type: 'relationship', 
                  relationTo: ['feeds','h5','systemPages'], 
                  hasMany: false,
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


export default Pages;