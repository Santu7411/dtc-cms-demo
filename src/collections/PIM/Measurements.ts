import { CollectionConfig } from 'payload/types';

const Measurements: CollectionConfig = {
  slug: 'measurements',
  labels: {
    singular: "Measurement",
    plural: "Measurements",
  }, 
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title'],
    group: 'PIM',
    hidden: true,
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
      }   
    ],
  },
]
}

export default Measurements;