import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import RelatedProductsAndSkus from '../../fields/relatedProductsAndSkus';
import PublishStatus from '../../fields/publishStatus';
import contentFunctions from '../../fields/contentFunctions';

const H5: CollectionConfig = {
  slug: 'h5',
  labels: {
    singular: "H5 Page",
    plural: "H5 Pages",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'Wechat MP',
  },
  fields: [
    PublishStatus,
    {
      name: 'thumbnail', 
      type: 'upload', 
      relationTo: 'media',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      type: "tabs", 
      tabs: [
        {
          label: "Content", 
          fields: [
    {
      name: "contentInfo", 
      type: "group", 
      label: "内容属性",
      fields: [ 
  RelatedProductsAndSkus, SelectTargets,
  {
    name: 'contentTags', 
    label: '内容标签',
    type: 'relationship', 
    relationTo: 'productTags', 
    hasMany: true,
  }, 
  ]
    },
    {
      name: "h5Source", 
      type: "group", 
      label: "H5",
      fields: [
        {
          type:'row',
          fields:[
            {
              name: 'h5Title',
              label: 'H5 Title',
              type: 'text',
            },
            {
              name: 'h5Url',
              label: 'URL',
              type: 'text',
            },
          ]
        },
      ]
    },
contentFunctions,
          ]
        },
        {
          label: "Assets", 
          fields: [
            {
              name: "assets", 
              type: "array", 
              label: "Assets",
              fields: [
                {
                  name: 'relatedAssets', 
                  type: 'relationship', 
                  relationTo: 'assets', 
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

export default H5;