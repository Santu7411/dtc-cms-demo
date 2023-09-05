import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import BeforeDashboard from './components/BeforeDashboard';
import Media from './collections/Media';

import Categories from './collections/PIM/Categories';
import Collections from './collections/PIM/Collections';
import ProductTags from './collections/PIM/ProductTags';
import Skus from './collections/PIM/Skus';
import Products from './collections/PIM/Products';
import Resources from './collections/Resources';
import TouchPoints from './collections/General/TouchPoints';
import Targets from './collections/General/Targets';
import Tiers from './collections/General/Tiers';
import Channels from './collections/General/Chanels';
import Measurements from './collections/PIM/Measurements';
import Attributes from './collections/PIM/Attributes';
import Options from './collections/PIM/Options';
import Engagements from './collections/Campaign/Engagements';
import GWPs from './collections/Campaign/GWPs';
import Coupons from './collections/Campaign/Coupons';
import Badges from './collections/Campaign/Badges';
import Gifts from './collections/Campaign/Gifts';
import Wallets from './collections/Campaign/Wallets';
import Pages from './collections/MP/Pages';
import Assets from './collections/General/Assets';
import Slides from './collections/MP/Slides';
import Feeds from './collections/MP/Feeds';
import H5 from './collections/MP/H5';
import Navigations from './collections/MP/Navigations';
import Links from './collections/MP/Links';
import SystemPages from './collections/MP/SystemPages';
import Campaigns from './collections/Campaign/Campaigns';

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      // The BeforeDashboard component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import BeforeDashboard statement on line 5.
      beforeDashboard: [BeforeDashboard],
    }
  },
  collections: [
    Products, Skus, Categories, Collections, ProductTags, Attributes, Measurements, Options, Campaigns, Engagements, GWPs, Wallets, Coupons, Badges, Gifts, Pages, Feeds, Slides, H5, Navigations, Links, SystemPages, Assets, Users, Media, Resources, TouchPoints, Targets, Tiers, Channels, 
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
