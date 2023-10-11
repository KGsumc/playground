import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    defineField({
      name: 'authorName',
      title: 'Author name',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'testimonials',
      type: 'string',
    }),
    defineField({
        name: 'company',
        title: 'company',
        type: 'string',
      }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
