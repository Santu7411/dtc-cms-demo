import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import RelatedProductsAndSkus from '../../fields/relatedProductsAndSkus';

const Notifactions: CollectionConfig = {
  slug: 'notifactions',
  labels: {
    singular: "Notifaction",
    plural: "Notifactions",
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
      name: 'notifactionText',
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

export default Notifactions;