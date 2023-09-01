import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import RelatedProductsAndSkus from '../../fields/relatedProductsAndSkus';
import PublishStatus from '../../fields/publishStatus';

const Assets: CollectionConfig = {
  slug: 'assets',
  labels: {
    singular: "Asset",
    plural: "Assets",
  },    
  admin: {
listSearchableFields:['title'],
    group: 'Assets',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    PublishStatus,
    {
      name: "contentInfo", 
      type: "group", 
      label: "内容属性",
      fields: [ 
  RelatedProductsAndSkus, SelectTargets,
  {
    name: 'contentTags', // required
    label: '内容标签',
    type: 'relationship', // required
    relationTo: 'productTags', // required
    hasMany: true,
  }, 
  ]
    },
    
  ],
}

export default Assets;