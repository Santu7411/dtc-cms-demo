import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: "Product",
    plural: "Products",
  },    
  admin: {
    useAsTitle: 'titleCN',
    listSearchableFields: ['titleCN', 'titleEN','titleNick'],
    group: 'PIM',
  },
  fields: [
    {
      name: 'thumbnail', // required
      type: 'upload', // required
      relationTo: 'media', // required
    },
    {
      type:'row',
      fields:[
 
       {
         name: "titleCN",
         label: "中文名称", 
         type: "text",
         required: true,
         admin:{ 
           width:"34%",          
         }
       },
       {
         name: "titleEN",
         label: "英文名称", 
         type: "text",
         admin:{
           width:"33%",
         }
       }, 
       {
        name: "nickname",
        label: "昵称", 
        type: "text",
        admin:{
          width:"33%",
        }
      }, 
      ] 
     }
    , 
    {
      type:'row',
      fields:[
 
       {
         name: "productId",
         label: "产品ID", 
         type: "text",
         required: true,
         admin:{ 
           width:"50%",          
         }
       },
       {
        name: 'online', // required
        type: 'checkbox', // required
        label: '上架',
        defaultValue: false,
        admin:{ 
          width:"25%",          
        }
      },
      {
        name: 'isNew', // required
        type: 'checkbox', // required
        label: '新品',
        defaultValue: false,
        admin:{ 
          width:"25%",          
        }
      },
      ] 
     }
    , 
    {
     type:'row',
     fields:[

      {
        name: 'ocategories', // required
        label: 'Categories',
        type: 'relationship', // required
        relationTo: 'categories', // required
        hasMany: true,
        admin:{
          width:"34%",
        }
      },
      {
        name: 'collections', // required
        label: 'Collections',
        type: 'relationship', // required
        relationTo: 'collections', // required
        hasMany: true,
        admin:{
          width:"33%",
        }
      },
      {
        name: 'productTags', // required
        label: '标签',
        type: 'relationship', // required
        relationTo: 'productTags', // required
        hasMany: true,
        admin:{
          width:"33%",
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
          label: "产品属性", // required
          fields: [
            // required
             {
              name: "properties", // required
              type: "array", // required
              label: "产品属性",
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
          name: "skus",
          label: "SKU", // required

                  fields:[
                    {
                      name:"skus",
                      label: "SKU",
                      type:"relationship",
                      relationTo:["skus"],
                      hasMany: true,
                    },
                  ]
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
  ],
  
}

export default Products;