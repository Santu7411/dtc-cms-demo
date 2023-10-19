import { Field } from 'payload/types';

const contentFunctions: Field =         {
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
      label: 'SKU',
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
      label: '缺省SKU',
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
relationTo: 'ebaHints', 
hasMany: false,
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
};


export default contentFunctions;