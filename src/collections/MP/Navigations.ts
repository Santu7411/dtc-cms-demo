import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import RelatedProductsAndSkus from '../../fields/relatedProductsAndSkus';
import PublishStatus from '../../fields/publishStatus';

const Navigations: CollectionConfig = {
  slug: 'navigations',
  labels: {
    singular: "Navigation",
    plural: "Navigations",
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
          label: "Navigation Items", 
          fields: [
            {
              name: "navItems", 
              type: "array", 
              label: "Navigation Items",
              fields: [
                {
                  type:'row',
                  fields:[
                    {
                      name: 'navLevel', 
                      label: "级别", 
                      type: 'number', 
                      admin:{ 
                        width:"100px",   
                        step: 1,       
                      } 
                    },
                    {
                      name: "navLabel",
                      label: "标题", 
                      type: "text",
                      admin:{ 
                        width:"200px",          
                      }
                    },
                {
                  name: 'navItem', 
                  label: "页面/链接", 
                  type: 'relationship', 
                  relationTo: ['pages','links'], 
                  hasMany: false,
                  admin:{ 
                    width:"300px",          
                  }
                },
                {
                  name: 'navImage', 
                  type: 'upload', 
                  relationTo: 'media',
                  admin:{ 
                    width:"25%",          
                  }
                },
              ]
            },
              ],
            },
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

export default Navigations;