import { CollectionConfig } from 'payload/types';
import ResourceText from '../blocks/resources/ResourceText';
import ResourceImage from '../blocks/resources/ResourceImage';
import ResourceVideo from '../blocks/resources/ResourceVideo';
import ResourceFile from '../blocks/resources/ResourceFile';

const Resources: CollectionConfig = {
  slug: 'resources',
  labels: {
    singular: "Resource",
    plural: "Resources",
  },
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title'],
    group: 'Resources',
  },
  fields: [
    {
      type:'row',
      fields:[
        {
          name: "title",
          label: "素材名称", 
          type: "text",
          required: true,
          admin:{ 
            width:"50%",          
          }
        },
        {
          name:"products",
          label: "相关产品",
          type:"relationship",
          relationTo:["products"],
          admin:{
            width:"50%",
                  style: {
                    alignSelf: 'flex-end',
                  },
          }
        }, 
      ]
    },
    {
      name: 'content', // required
      type: 'blocks', // required
      label: '内容',
      blocks: [
        ResourceText,
        ResourceImage,
        ResourceVideo,
        ResourceFile,
      ],
    },
  ],
}

export default Resources;