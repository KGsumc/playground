import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'clientSection',
  title: 'Client Section',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
    }),
  ],
})
