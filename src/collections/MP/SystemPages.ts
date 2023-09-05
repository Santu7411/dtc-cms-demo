import { CollectionConfig } from 'payload/types';
import SelectTargets from '../../fields/selectTargets';
import PublishStatus from '../../fields/publishStatus';

const SystemPages: CollectionConfig = {
  slug: 'systemPages',
  labels: {
    singular: "System Page",
    plural: "System Pages",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'Wechat MP',
  },
  fields: [
    PublishStatus,
    {
      name: 'title',
      label:'标题',
      type: 'text',
    },
    {
      name: 'systemPageId',
      label:'系统标识',      
      type: 'text',
    },
    SelectTargets,
  ]
}

export default SystemPages;