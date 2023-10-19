import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';

const Campaigns: CollectionConfig = {
  slug: 'campaigns',
  labels: {
    singular: "Campaign",
    plural: "Campaigns",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'Loyalty Engine',
  },
  fields: [
    {
      name: "title",
      label: "名称", 
      type: "text",
    },
    {
        type:'row',
        fields:[
   
         {
           name:"start",
           label: "开始时间",
           type:"date",
           admin:{
             width:"40%",
                   style: {
                     alignSelf: 'flex-end',
                   },
             date:{
               pickerAppearance: "dayAndTime",
             }      
           }
         },
         {
           name: 'hasEnd', 
           type: 'checkbox',
           label: '结束时间',
           defaultValue: true,
           admin:{
             width:"20%",
                   style: {
                     verticalAlign: 'bottom',
                   },    
           }
         },  
         {
           name:"end",
           label: "结束时间",
           type:"date",
           admin:{
             width:"40%",
                   style: {
                     alignSelf: 'flex-end',
                   },
             date:{
               pickerAppearance: "dayAndTime",
             },
             condition: (data, siblingData, { user }) => {
               if (siblingData.hasEnd) {
                 return true;
               } else {
                 return false;
               }
             }
           }
         }, 
        ] 
       },
      SelectTargets,
    {
      type: "tabs", 
      tabs: [
        {
          name: "engagements",
          label: "Engagements", 
          fields: [
            {
                name: "engagements", 
                type: "array", 
                label: "Engagements",
                fields: [
                  {
                    name: 'engagement', 
                    type: 'relationship', 
                    relationTo: 'engagements', 
                    hasMany: false,
                  }
                ],
              },
          ],
        },
        {
            label: "Assets", 
            fields: [
              {
                name: "assets", 
                type: "array", 
                label: "Assets",
                fields: [
                    {
                        name: 'assetPlanTitle', 
                        label:'Plan Title',
                        type: 'text', 
                      },
                  {
                    name: 'relatedAssets', 
                    type: 'relationship', 
                    relationTo: 'assets', 
                    hasMany: true,
                  }
                ],
              },
            ]
          },
          {
            label: "References & Comments", 
            fields: [
              {
                name: "referenceAndComments", 
                type: "array", 
                label: "References & Comments",
                fields: [
                  {
                    name: 'referenceContent', 
                    type: 'richText', 
                  }
                ],
              },
            ]
          }   
      ],
    },
  ],
  
}

export default Campaigns;