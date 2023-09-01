import { Field } from 'payload/types';

const EngagementLimits: Field =     {
    name: "limits", // required
    type: "group", // required
    label: "限制",
    fields: [
      {
        type:'row',
        fields:[
          {
            name: 'unitsLimit', // required
            label: "奖励总数限制",
            type: 'select', // required
            hasMany: false,
            options: [
              {
                label: '无规定',
                value: 'unlimited',
              },
              {
                label: '每天',
                value: 'perDay',
              },
              {
                label: '每小时',
                value: 'perHour',
              },
              {
                label: '每周',
                value: 'perWeek',
              },
              {
                label: '每月',
                value: 'perMonth',
              },
              {
                label: '每年',
                value: 'perYear',
              },
              {
                label: '总计',
                value: 'inTotal',
              },       
            ],
            admin:{
              width:"50%",
            }
          },
          {
            name: 'units', // required
            type: 'number', // required
            admin: {
              step: 1,
              width:"50%",
            }
          }
]
},
{
type:'row',
fields:[
  {
    name: 'unitsLimitPerMember', // required
    label: "每人奖励数量限制",
    type: 'select', // required
    hasMany: false,
    options: [
      {
        label: '无规定',
        value: 'unlimited',
      },
      {
        label: '每天',
        value: 'perDay',
      },
      {
        label: '每小时',
        value: 'perHour',
      },
      {
        label: '每周',
        value: 'perWeek',
      },
      {
        label: '每月',
        value: 'perMonth',
      },
      {
        label: '每年',
        value: 'perYear',
      },
      {
        label: '总计',
        value: 'inTotal',
      },       
    ],
    admin:{
      width:"50%",
    }
  },
  {
    name: 'units', // required
    type: 'number', // required
    admin: {
      step: 1,
      width:"50%",
    }
  }
]
},
{
type:'row',
fields:[
{
name: 'engagementLimitPerMember', // required
label: "每人参与限制",
type: 'select', // required
hasMany: false,
options: [
{
label: '无规定',
value: 'unlimited',
},
{
label: '每天',
value: 'perDay',
},
{
label: '每小时',
value: 'perHour',
},
{
label: '每周',
value: 'perWeek',
},
{
label: '每月',
value: 'perMonth',
},
{
label: '每年',
value: 'perYear',
},
{
label: '总计',
value: 'inTotal',
},       
],
admin:{
width:"50%",
}
},
{
name: 'units', // required
type: 'number', // required
admin: {
step: 1,
width:"50%",
}
}
]
},
]
  };


export default EngagementLimits;