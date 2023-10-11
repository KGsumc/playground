import {GrNavigate} from 'react-icons/gr'
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: GrNavigate,
    fields: [
    defineField(  {
        name: 'title',
        type: 'string',
        title: 'Title',
      }),
      defineField({
        name: 'navLink',
        type: 'string',
        title: 'Navigation Link',
      }),
      defineField({
        name: 'id',
        type: 'number',
        title: 'ID',
      }),
      
    ],
})
