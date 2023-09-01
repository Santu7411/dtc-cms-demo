import { Block } from 'payload/types';

const ContentDeliverSingle: Block = {
  slug: 'contentDeliverSingle', // required
  labels: {
    singular: "内容触达",
    plural: "内容触达",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      type:'row',
      fields:[
        {
          name: 'operate', // required
          label: "条件",
          type: 'select', // required
          hasMany: false,
          defaultValue:'any',
          options: [
            {
              label: '任何',
              value: 'any',
            },
            {
              label: '符合这些标签之一',
              value: 'isOneOf',
            },
            {
              label: '除这些标签之外',
              value: 'isNotOneOf',
            },       
          ],
          admin:{
            width:"180px",
          }
        },
    {
      name:"video",
      label: "视频",
      type:"relationship",
      hasMany: true,
      relationTo:["categories","products"],
      admin:{
        width:"40%",
        condition: (data, siblingData, { user }) => {
          if (siblingData.operate=='any') {
            return false;
          } else {
            return true;
          }
        }, 
      }
    }, 
    {
      name: 'action', // required
      label: "动作",
      type: 'select', // required
      hasMany: false,
      defaultValue:'touched',
      options: [
        {
          label: '触达',
          value: 'touched',
        },
        {
          label: '停留时间/观看时长',
          value: 'viewTime',
        },
        {
          label: '看完',
          value: 'viewWhole',
        },
        {
          label: '看完段落/浏览屏数',
          value: 'viewSection',
        },
      ],
      admin:{
        width:"150px",
              style: {
                alignSelf: 'flex-end',
              },
      }
    },
    {
      name: 'condition', // required
      label: "条件",
      type: 'select', // required
      defaultValue:'equal',      
      hasMany: false,
      options: [
        {
          label: '=',
          value: 'equal',
        },
        {
          label: '<>',
          value: 'not_equal',
        },
        {
          label: '>',
          value: 'greater',
        },
        {
          label: '>=',
          value: 'greater_equal',
        },
        {
          label: '<',
          value: 'less',
        },
        {
          label: '=<',
          value: 'less_equal',
        },
      ],
      admin:{
        width:"120px",
 
        condition: (data, siblingData, { user }) => {
          var choice=['viewTime','viewSection'];
          if (choice.indexOf(siblingData.action)>-1) {
            return true;
          } else {
            return false;
          }
        },  
              style: {
                alignSelf: 'flex-end',
              },
      }
    },
    {
      name: 'time', // required
      label: "时间（秒）",
      type: 'number', // required
      admin:{
        step: 1,
        width:"100px",
        condition: (data, siblingData, { user }) => {
          if (siblingData.action=='viewTime') {
            return true;
          } else {
            return false;
          }
        },  

      }
    },
    {
      name: 'section', // required
      label: "段落/屏数",
      type: 'number', // required
      admin:{
        step: 1,
        width:"100px",
        condition: (data, siblingData, { user }) => {
          if (siblingData.action=='viewSection') {
            return true;
          } else {
            return false;
          }
        },  
      }
    }

  ],
},
  ]
};


export default ContentDeliverSingle;