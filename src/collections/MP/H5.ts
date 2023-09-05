import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import RelatedProductsAndSkus from '../../fields/relatedProductsAndSkus';
import PublishStatus from '../../fields/publishStatus';

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
    {
      name: "functions", 
      type: "group", 
      label: "功能",
      fields: [ 
        {
          type:'row',
          fields:[
            {
              name: 'hasAddCart', 
              type: 'checkbox', 
              label: '加购卡片',
              defaultValue: false,
            },
            {
              name: 'hasCartIcon', 
              type: 'checkbox', 
              label: '购物车Icon',
              defaultValue: false,
            },
            {
              name: 'hasEbaHint', 
              type: 'checkbox', 
              label: 'EBA提示',
              defaultValue: false,
            },
            {
              name: 'hasLikeIcon', 
              type: 'checkbox', 
              label: 'Like Icon',
              defaultValue: false,
            },
            {
              name: 'hasShareIcon', 
              type: 'checkbox', 
              label: '分享Icon',
              defaultValue: false,
            }
  ]
    },
    {
      type:'row',
      fields:[
    
        {
          name: 'productToAdd', 
          label: '加购产品',
          type: 'relationship', 
          relationTo: 'products', 
          hasMany: false,
          admin:{
            width:"30%",
            condition: (data, siblingData, { user }) => {
              if (siblingData.hasAddCart) {
                return true;
              } else {
                return false;
              }
            },
          }
        }, 
        {
          name: 'skuToAdd', 
          label: '加购SKU',
          type: 'relationship', 
          relationTo: 'skus', 
          hasMany: true,
          admin:{
            width:"40%",
            condition: (data, siblingData, { user }) => {
              if (siblingData.hasAddCart) {
                return true;
              } else {
                return false;
              }
            },
          }
        },  
        {
          name: 'skuToAddDefault', 
          label: '加购SKU',
          type: 'relationship', 
          relationTo: 'skus', 
          hasMany: false,
          admin:{
            width:"30%",
            condition: (data, siblingData, { user }) => {
              if (siblingData.hasAddCart) {
                return true;
              } else {
                return false;
              }
            },
          }
        },  
]
},
{
  name: 'ebaHints', 
  label: 'EBA提示',
  type: 'relationship', 
  relationTo: 'skus', 
  hasMany: true,
  admin:{
    width:"40%",
    condition: (data, siblingData, { user }) => {
      if (siblingData.hasEbaHint) {
        return true;
      } else {
        return false;
      }
    },
  }
}, 
{
  name: 'likeCount', 
  type: 'number', 
  admin: {
    step: 1,
    width:'150px',
    condition: (data, siblingData, { user }) => {
      if (siblingData.hasLikeIcon) {
        return true;
      } else {
        return false;
      }
    },
  }
}, 
{
  name: 'shareCount', 
  type: 'number', 
  admin: {
    step: 1,
    width:'150px',
    condition: (data, siblingData, { user }) => {
      if (siblingData.hasShareIcon) {
        return true;
      } else {
        return false;
      }
    },
  }
}
  ]
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

export default H5;