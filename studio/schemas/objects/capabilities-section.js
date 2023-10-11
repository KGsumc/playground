import {GrTechnology} from 'react-icons/gr'
import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'capabilitiesSection',
  title: 'Capabilities Section',
  type: 'document',
  icon: GrTechnology,
  fields: [
    defineField({
      name: 'stepNumber',
      type: 'number',
      title: 'Step Number',
    }),
    defineField({
        name: 'stepNumberColorCode',
        type: 'text',
        title: 'Step Number Color Code',
      }),
    defineField({
      name: 'title',
      type: 'text',
      title: 'Title',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
  ],
})
