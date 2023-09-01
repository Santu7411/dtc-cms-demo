import { Block } from 'payload/types';
import ContentDeliverSingle from '../trigger/ContentDeliverSingle';
import AddPoints from '../effects/AddPoints';
import GiveGWPs from '../effects/GiveGWPs';
import GiveGifts from '../effects/GiveGifts';
import GiveCoupons from '../effects/GiveCoupons';
import GiveBadges from '../effects/GiveBadges';
import EbaCare from '../effects/EbaCare';
import PushMpHints from '../effects/PushMpHints';
import PushSMS from '../effects/PushSMS';
import EngagementLimits from '../../fields/engagementLimits';
import LinkClick from '../trigger/LinkClick';
import EnquireService from '../trigger/EnquireService';
import TalkingInGroup from '../trigger/TalkingInGroup';

const InteractiveEvents: Block = {
  slug: 'interactiveEvents', // required
  labels: {
    singular: "实时互动激励",
    plural: "实时互动激励",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821100/icon_file_sx2p3c.png',
  fields: [
    // required
    
    {
      name: 'triggers', // required
      type: 'blocks', // required
      label: '触发条件',
      blocks: [
        ContentDeliverSingle, LinkClick, EnquireService, TalkingInGroup
      ],
    },
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


export default InteractiveEvents;