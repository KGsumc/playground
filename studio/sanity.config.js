import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {dashboardTool, sanityTutorialsWidget, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'
import { netlifyDeployStatusBadge } from 'sanity-plugin-netlify-deploy-status-badge'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
import {myStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'playground',

  projectId: 'ivlfs24b',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
      // defaultDocumentNode: defaultDocumentNodeResolver,
    }), 
    visionTool(),
    dashboardTool({ 
      widgets: [
        projectInfoWidget({ layout: { width: "small" } }),
        projectUsersWidget(),
        netlifyWidget({
          title: 'Site deployments',
          layout: { width: "small" },
          sites: [
            {
              title: 'Playsite',
              apiId: '07519c2d-d28e-42c4-8093-f38ff7b2f762',
              buildHookId: '6514fd78fe509b471b90d922',
              name: 'Playsite',
              url: 'https://strong-medovik-92dc1a.netlify.app',
            }
          ]
      }),
        sanityTutorialsWidget(),
      ]
    }),
    netlifyDeployStatusBadge({
      apiId: "07519c2d-d28e-42c4-8093-f38ff7b2f762",
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
