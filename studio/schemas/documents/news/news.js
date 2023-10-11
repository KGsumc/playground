import {TiersIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'newsSection',
    title: ' Media / Press Releases',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isCustomNews',
            title: 'Do you want to write your Custom NEWS?',
            type: 'boolean',
            description: 'Check this if you want to write custom news or Redirect URL.',
            initialValue: false,
        }),
        defineField({
            name: 'redirectUrl',
            title: 'Redirect URL',
            type: 'string'
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime'
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'ogImage',
            title: 'OG Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'ogDescription',
            title: 'OG Description',
            type: 'text',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        }),
    ],
    icon: TiersIcon,
})