import { Field } from 'payload/types';

const PublishStatus: Field = {
  name: "publishStatus", 
  type: "group", 
  label: "发布状态",
  fields: [
    {
      name: 'active', 
      type: 'checkbox', 
      label: '在线',
      defaultValue: false,
    },
    {
      name:"start",
      label: "上线时间",
      type:"date",
      admin:{
        date:{
          pickerAppearance: "dayAndTime",
        }      
      }
    },
    {
      name: 'hasEnd', // required
      type: 'checkbox', // required
      label: '下线时间',
      defaultValue: false,
    },  
    {
      name:"end",
      label: "下线时间",
      type:"date",
      admin:{
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

  ],
  admin:{
    position:'sidebar',
  }
};


export default PublishStatus;