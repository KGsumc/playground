import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logo',
  title: 'Logo Image',
  type: 'document',
  fields: [
    defineField({
      name: 'lightLogo',
      title: 'Light Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'darkLogo',
      title: 'Dark Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ]
})
