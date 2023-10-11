import { ImagesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'clientSection',
  title: 'Customer Logos',
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
  icon: ImagesIcon,
})
