import { Field } from 'payload/types';

const SelectTargets: Field =     {
        type:'row',
        fields:[
      
              {
                name: 'targetIs', 
                label: "目标人群",
                type: 'select', 
                defaultValue:'any',
                hasMany: false,
                options: [
                  {
                    label: '所有人',
                    value: 'any',
                  },
                  {
                    label: '符合这些人群之一',
                    value: 'isOneOf',
                  },
                  {
                    label: '除这些人群之外',
                    value: 'isNotOneOf',
                  },       
                ],
                admin:{
                  width:"250px",
                }
              },
      {
        name:"targets",
        label: "人群标签",
        type:"relationship",
        relationTo:["targets"],
      hasMany: true,
                admin:{
                  width:"50%",
                  condition: (data, siblingData, { user }) => {
                    if (siblingData.targetIs=='any') {
                      return false;
                    } else {
                      return true;
                    }
                  }, 
                }
      }, 
]
  };


export default SelectTargets;