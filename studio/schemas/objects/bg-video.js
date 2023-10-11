import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'backgroundVideo',
  type: 'object',
  fields: [
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'image',
    }),
  ],
})
