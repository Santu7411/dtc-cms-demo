import { CollectionConfig } from 'payload/types';

const ProductTags: CollectionConfig = {
  slug: 'productTags',
  labels: {
    singular: "Product Tag",
    plural: "Product Tags",
  },   
  admin: {
    useAsTitle: 'name',
    group: 'PIM',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}

export default ProductTags;