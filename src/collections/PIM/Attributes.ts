import { CollectionConfig } from 'payload/types';

const Attributes: CollectionConfig = {
  slug: 'attributes',
  labels: {
    singular: "Attribute",
    plural: "Attributes",
  }, 
  admin: {
    useAsTitle: 'attributeLabel',
    listSearchableFields: ['attributeLabel','attributeKey'],
    group: 'PIM',
  },
  fields: [
    {
     type:'row',
     fields:[
      {
        name: "attributeLabel",
        label: "名称", 
        type: "text",
        required: true,
        admin:{ 
          width:"50%",          
        }
      } ,
      {
        name: "attributeKey",
        type: "text",
        required: true,
        admin:{ 
          width:"50%",          
        }
      } ,       
    ],
  },
]
}

export default Attributes;