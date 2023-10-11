import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'missionSection',
    title: 'Mission Section',
    type: 'document',
    fields: [
        defineField({
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
        }),
        defineField({
            name: 'subTitle',
            title: 'Sub Title',
            type: 'string',
        }),
    ],
})
