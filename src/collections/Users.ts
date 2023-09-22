import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: "System User",
    plural: "System Users",
  },    
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'email',
    group: 'General Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;