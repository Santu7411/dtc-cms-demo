import { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
  slug: 'categories',
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
    {
      name:"parent",
      label: "父类目",
      type:"relationship",
      relationTo:["categories"],
      hasMany: false,
      admin:{
        position: 'sidebar'
      }
    }, 
  ],
}

export default Categories;