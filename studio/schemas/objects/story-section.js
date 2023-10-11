import { defineField, defineType } from "sanity";

export default defineType({
    name: 'storySection',
    title: 'Story Section',
    type: 'document',
    fields: [
        defineField({
            name: 'screenName',
            title: 'Screen Name',
            type: 'string',
        }),
        defineField({
            name: 'screenContent',
            title: 'Screen Content',
            type: 'text',
        }),
        defineField({
            name: 'pera1',
            title: 'Pera 1',
            type: 'text',
        }),
        defineField({
            name: 'pera2',
            title: 'Pera 2',
            type: 'text'
        }),
        defineField({
            name: 'pera3',
            title: 'Pera 3',
            type: 'text'
        }),
        defineField({
            name: 'pera4',
            title: 'Pera 4 (highlited text)',
            type: 'text'
        }),
        defineField({
            name: 'pera5',
            title: 'Pera 5',
            type: 'text'
        }),
    ]
})