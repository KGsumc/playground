import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { dashboardTool, sanityTutorialsWidget, projectUsersWidget, projectInfoWidget } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { netlifyDeployStatusBadge } from "sanity-plugin-netlify-deploy-status-badge";
import {myStructure} from './deskStructure';


export default defineConfig({
  name: 'default',
  title: 'playground',

  projectId: 'ivlfs24b',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),  
    dashboardTool({ widgets: [ 
      projectInfoWidget({ layout: { width: "small" } }),
      projectUsersWidget(),
      // documentListWidget(),
      netlifyWidget({
        title: 'Netlify Deployments',
        sites: [
          {
            title: 'Playsite',
            apiId: '07519c2d-d28e-42c4-8093-f38ff7b2f762',
            buildHookId: '6514fd78fe509b471b90d922',
            name: 'playsite',
            url: 'https://strong-medovik-92dc1a.netlify.app',
          }
        ]
    }),
      sanityTutorialsWidget(),
    ]}),
    netlifyDeployStatusBadge({
      apiId: "07519c2d-d28e-42c4-8093-f38ff7b2f762",
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
