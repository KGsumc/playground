import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name',
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
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'isBackgroundVideo',
      title: 'Do you want to add "Background Video?"',
      type: 'boolean',
      description: 'Check this if you want to add "Background Video" in your Hero Section.',
      initialValue: false,
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bgVideo',
      type: 'backgroundVideo',
      // to: [{type: 'backgroundVideo'}],
    }),
  ],
})
