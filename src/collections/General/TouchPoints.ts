import { CollectionConfig } from 'payload/types';

const TouchPoints: CollectionConfig = {
  slug: 'touchPoints',
  labels: {
    singular: "Touchpoint",
    plural: "Touchpoints",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'General Settings',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'mediaPlatform', // required
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: '微信小程序',
          value: 'wechat_mp',
        },
        {
          label: '微信公号',
          value: 'wechat',
        },
        {
          label: '企微群',
          value: 'wecom_group',
        },
      ],
    },
    {
      name: 'rules', // required
      label: '格式要求',
      type: 'richText', // required
      defaultValue: [{
        children: [{ text: 'Here is some default content for this field' }],
      }],
      required: true,
      admin: {
        elements: [
          'h2',
          'h3',
          'h4',
          'link',
          'blockquote',
        ],
        leaves: [
          'bold',
          'italic',
        ],
        link: {
          // Inject your own fields into the Link element
          fields: [
            {
              name: 'rel',
              label: 'Rel Attribute',
              type: 'select',
              hasMany: true,
              options: [
                'noopener', 'noreferrer', 'nofollow',
              ],
            },
          ],
        },
        upload: {
          collections: {
            media: {
              fields: [
                // any fields that you would like to save
                // on an upload element in the `media` collection
              ],
            },
          },
        },
      }
    }
  ],
}

export default TouchPoints;