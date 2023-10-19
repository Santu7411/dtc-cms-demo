import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import RelatedProductsAndSkus from '../../fields/relatedProductsAndSkus';
import PublishStatus from '../../fields/publishStatus';
import contentFunctions from '../../fields/contentFunctions';

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

export default Slides;