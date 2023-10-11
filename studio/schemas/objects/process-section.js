import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'processSection',
  title: 'Process Section',
  type: 'document',
  fields: [
    defineField({
      name: 'step',
      title: 'Step Number',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
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
