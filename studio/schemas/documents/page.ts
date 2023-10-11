// ./schemas/pageType.ts

import {DocumentsIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'


// export const pageType = defineType({
  export default defineType({
  name: 'pageType',
  type: 'document',
  title: 'Pages',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
        defineArrayMember({
          name: 'callToAction',
          type: 'reference',
          to: [{type: 'promotion'}],
        }),
        defineArrayMember({
          name: 'focusSection',
          type: 'focusSection',
        }),
        // etc...
      ],
    }),
  ],
  icon: DocumentsIcon,
})
