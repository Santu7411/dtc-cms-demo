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
    hidden: true,
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