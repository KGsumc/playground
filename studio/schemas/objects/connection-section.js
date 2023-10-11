import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'connectionSection',
    title: 'Connection Section',
    type: 'document',
    fields: [
        defineField({
            name: 'screenName',
            title: 'Screen Name',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Connection Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        }),
    ]
})
