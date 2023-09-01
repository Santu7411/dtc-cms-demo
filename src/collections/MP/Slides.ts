import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import RelatedProductsAndSkus from '../../fields/relatedProductsAndSkus';
import PublishStatus from '../../fields/publishStatus';

const Slides: CollectionConfig = {
  slug: 'slides',
  labels: {
    singular: "Slide",
    plural: "Slides",
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
    PublishStatus,
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
      name: "frontContent", 
      type: "group", 
      label: "前景内容",
      fields: [ 
        {
          type:'row',
          fields:[
            {
              name: 'hasTitle', 
              type: 'checkbox', 
              label: '大标题',
              defaultValue: false,
            },
            {
              name: 'hasSubTitle', 
              type: 'checkbox', 
              label: '副标题',
              defaultValue: false,
            },
            {
              name: 'hasCopyText', 
              type: 'checkbox', 
              label: '文字',
              defaultValue: false,
            },
            {
              name: 'hasButton', 
              type: 'checkbox', 
              label: '按钮',
              defaultValue: false,
            },
            {
              name: 'alignH', // required
              label: "水平对齐",
              type: 'select', // required
              hasMany: false,
              options: [
                {
                  label: '左',
                  value: 'left',
                },
                {
                  label: '中',
                  value: 'center',
                },
                {
                  label: '右',
                  value: 'right',
                }      
              ],
              admin:{
                width:"150px",
              }
            },
            {
              name: 'alignV', // required
              label: "竖直对齐",
              type: 'select', // required
              hasMany: false,
              options: [
                {
                  label: '上',
                  value: 'up',
                },
                {
                  label: '中',
                  value: 'middle',
                },
                {
                  label: '下',
                  value: 'down',
                }      
              ],
              admin:{
                width:"150px",
              }
            },
  ]
    },
  {
    name: 'bigTitle', 
    label: '大标题',
    type: 'text', 
    admin:{
      condition: (data, siblingData, { user }) => {
        if (siblingData.hasTitle) {
          return true;
        } else {
          return false;
        }
      }
    }
  }, 
  {
    name: 'subTitle', 
    label: '副标题',
    type: 'text', 
    admin:{
      condition: (data, siblingData, { user }) => {
        if (siblingData.hasSubTitle) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  {
    name: 'copyText', 
    label: '文字',
    type: 'textarea', 
    admin:{
      condition: (data, siblingData, { user }) => {
        if (siblingData.hasCopyText) {
          return true;
        } else {
          return false;
        }
      }
    }
  },  
  {
    type:'row',
    fields:[
      {
        name: 'buttonText', 
        label: '按钮文字',
        type: 'text',
    admin:{
      condition: (data, siblingData, { user }) => {
        if (siblingData.hasButton) {
          return true;
        } else {
          return false;
        }
      }
    }
      },   
      {
        name: 'buttonLink', 
        label: '按钮链接',
        type: 'text', 
    admin:{
      condition: (data, siblingData, { user }) => {
        if (siblingData.hasButton) {
          return true;
        } else {
          return false;
        }
      }
    }
      },  
    ]
  },
  ]
    },  
    {
      name: "backgroundContent", 
      type: "group", 
      label: "背景内容",
      fields: [ 
        {
          name: 'backgroundType', 
          type: 'radio', 
          options: [ 
            {
              label: '视频',
              value: 'video',
            },
            {
              label: '图片',
              value: 'image',
            },
          ],
          defaultValue: 'image', // The first value in options.
          admin: {
            layout: 'horizontal',
          }
        },
        {
          name: 'backgroundAsset', 
          type: 'upload', 
          relationTo: 'media',
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
  ],
}

export default Slides;