import { CollectionConfig } from 'payload/types';
import AttrMeasurements from '../../blocks/attributes/attrMeasurements';
import AttrDate from '../../blocks/attributes/attrDate';
import AttrImage from '../../blocks/attributes/attrImage';
import AttrFile from '../../blocks/attributes/attrFile';
import AttrText from '../../blocks/attributes/attrText';
import AttrRichText from '../../blocks/attributes/attrRichText';
import AttrSingleSelect from '../../blocks/attributes/attrSingleSelect';
import AttrCheckbox from '../../blocks/attributes/attrCheckbox';
import AttrMultiSelect from '../../blocks/attributes/attrMultiSelect';
import AttrColor from '../../blocks/attributes/attrColor';

const Skus: CollectionConfig = {
  slug: 'skus',
  labels: {
    singular: "SKU",
    plural: "SKUs",
  }, 
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title', 'skuId'],
    group: 'PIM',
  },
  fields: [
    {
     type:'row',
     fields:[
      {
        name: "title",
        label: "名称", 
        type: "text",
        required: true,
        admin:{ 
          width:"30%",          
        }
      },
      {
        name: "skuId",
        label: "SKU Id", 
        type: "text",
        admin:{
          width:"30%",
        }
      }, 
      {
        name:"products",
        label: "产品",
        type:"relationship",
        relationTo:["products"],
        admin:{ 
          width:"40%",  
          style: {
            alignSelf: 'flex-end',
          },        
        }
      },  
     ] 
    }
   ,    
   {
    type: "tabs", // required
    tabs: [
      // required
      {
        name: "attributesTab",
        label: "产品属性", // required
        fields: [
          {
            name: 'attributes', // required
            type: 'blocks', // required
            blocks: [
              // required
              AttrMeasurements, AttrDate, AttrImage, AttrFile, AttrText, AttrRichText, AttrSingleSelect, AttrCheckbox, AttrMultiSelect, AttrColor
            ],
          },
        ],
      },
      {
        name: "resources",
        label: "素材", // required
        fields: [
          // required
          {
            name: "resources", // required
            type: "array", // required
            label: "素材",
            fields: [
              {
                type:'row',
                fields:[
                  {
                    name:"resources",
                    label: "素材",
                    type:"relationship",
                    relationTo:["resources"],
                    admin:{ 
                      width:"50%",          
                    }
                  },
              {
                name: "status",
                type: "select",
                label: "状态",
                admin:{
                  width:"50%",
                        style: {
                          alignSelf: 'flex-end',
                        },
                },
                options: [
                  {
                    label: '计划',
                    value: 'planned',
                  },
                  {
                    label: '准备中',
                    value: 'producing',
                  },
                  {
                    label: '可用',
                    value: 'ready',
                  },
                  {
                    label: '已过期',
                    value: 'expired',
                  },
                ],
              },
          ],
        },
            ]
        },
        ],
      }
    ],
  },
]
}

export default Skus;