import { Field } from 'payload/types';

const RelatedProductsAndSkus: Field =     {
        type:'row',
        fields:[
      
          {
            name: 'relatedProduct', // required
            label: '相关产品',
            type: 'relationship', // required
            relationTo: 'products', // required
            hasMany: true,
            admin:{
              width:"50%",
            }
          }, 
          {
            name: 'relatedSku', // required
            label: '相关SKU',
            type: 'relationship', // required
            relationTo: 'skus', // required
            hasMany: true,
            admin:{
              width:"50%",
            }
          },  
]
  };


export default RelatedProductsAndSkus;