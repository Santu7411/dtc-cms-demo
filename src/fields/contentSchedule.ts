import { Field } from 'payload/types';

const ContentSchedule: Field = {
  type: "row", 
  fields: [
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
      name:"end",
      label: "下线时间",
      type:"date",
      admin:{
        date:{
          pickerAppearance: "dayAndTime",
        },
      }
    }, 

  ]
};


export default ContentSchedule;