import { Block } from 'payload/types';
import AddPoints from '../effects/AddPoints';
import GiveGWPs from '../effects/GiveGWPs';
import GiveGifts from '../effects/GiveGifts';
import GiveCoupons from '../effects/GiveCoupons';
import GiveBadges from '../effects/GiveBadges';
import EbaCare from '../effects/EbaCare';
import PushMpHints from '../effects/PushMpHints';
import PushSMS from '../effects/PushSMS';
import EngagementLimits from '../../fields/engagementLimits';

const Achievements: Block = {
  slug: 'achievements', // required
  labels: {
    singular: "成就奖励",
    plural: "成就奖励",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821100/icon_file_sx2p3c.png',
  fields: [
    // required
    {
      name: "limits", // required
      type: "group", // required
      label: "成就人群",
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
      name:"targets",
      label: "成就标签",
      type:"relationship",
      hasMany: true,
      relationTo:["targets"],
      admin:{
        width:"60%",
        condition: (data, siblingData, { user }) => {
          if (siblingData.operate=='any') {
            return false;
          } else {
            return true;
          }
        }, 
      }
    }

  ],
},]},
    {
      name: 'effects', // required
      type: 'blocks', // required
      label: '结果',
      blocks: [
        GiveGWPs, GiveGifts, GiveCoupons, AddPoints, GiveBadges, EbaCare, PushMpHints, PushSMS
      ],
    },
    EngagementLimits,
  ],
};


export default Achievements;