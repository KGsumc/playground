import { defineField, defineType } from "sanity";

export default defineType({
    name: 'formImage',
    title: "Form Image",
    type: 'document',
    fields: [
        defineField({
            name: 'formImage',
            title: "Form Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ]
})