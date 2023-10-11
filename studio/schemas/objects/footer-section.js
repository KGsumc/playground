import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footerSection',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ]
})
