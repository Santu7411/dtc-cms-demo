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
     // {
     //   name:"products",
    //    label: "产品",
     //   type:"relationship",
     //   relationTo:["products"],
    //    admin:{ 
    //      width:"40%",  
    //      style: {
    //        alignSelf: 'flex-end',
   //       },        
   //     }
   //   },  
     ] 
    }
   ,    

]
}

export default Skus;