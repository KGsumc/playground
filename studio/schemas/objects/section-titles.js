import { GrSelection } from 'react-icons/gr'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sectionTitle',
  title: 'Section Title',
  type: 'document',
  icon: GrSelection,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'sectionSubtitle',
      type: 'string',
      title: 'Section Sub Title',
    }),
    defineField({
      name: 'uniqueId',
      type: 'number',
      title: 'Unique Id',
    }),
  ],
})
