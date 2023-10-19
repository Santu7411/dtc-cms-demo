import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import RelatedProductsAndSkus from '../../fields/relatedProductsAndSkus';

const EbaHints: CollectionConfig = {
  slug: 'ebaHints',
  labels: {
    singular: "EBA Hint",
    plural: "EBA Hints",
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
      name: 'ebaAvatar', 
      label: 'EBA头像',
      type: 'relationship', 
      relationTo: 'ebas', 
      hasMany: false,
    }, 
    {
      name: 'hintText',
      type: 'text',
    },    
    {
      name: 'hasButton', 
      type: 'checkbox', 
      label: '按钮',
      defaultValue: false,
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
    RelatedProductsAndSkus, SelectTargets,
  ]
}

export default EbaHints;