import { CollectionConfig } from 'payload/types';

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
        name: "Info",
        label: "属性", // required
        fields: [
          // required
           {
            name: "properties", // required
            type: "array", // required
            label: "属性",
            interfaceName: "properties", // optional
            labels: {
              singular: "属性",
              plural: "属性",
            },
            fields: [
              {
                type:'row',
                fields:[
              {
                name: "propertyKey",
                type: "text",
                admin:{ 
                  width:"50%",          
                }
              },
              {
                name: "propertyValue",
                type: "text",
                admin:{
                  width:"50%",
                        style: {
                          alignSelf: 'flex-end',
                        },
                }
              },
          ],
        },
            ]
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