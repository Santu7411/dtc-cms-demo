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
    group: 'Product',
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
   //   {
   //     name:"products",
   //     label: "产品",
  //      type:"relationship",
  //      relationTo:["products"],
  //      admin:{ 
  //        width:"40%",  
  //        style: {
  //          alignSelf: 'flex-end',
  //        },        
 //       }
  //    },  
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

    ],
  },
]
}

export default Skus;