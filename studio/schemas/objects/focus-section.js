import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'focusSection',
  title: 'Focus Section',
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
    defineField({
      name: 'videoURL',
      title: 'Video URL',
      type: 'url',
    }),
  ],
})
