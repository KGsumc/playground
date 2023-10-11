import { defineField, defineType } from "sanity";

export default defineType({
    name: 'socialLinks',
    title: 'Social Links',
    type: 'document',
    fields: [
        defineField({
            name: 'isShowFacebookLink',
            title: 'Do you want to show "Facebook Link"?',
            type: 'boolean',
            description: 'Check this if you want to show "Facebook Link".',
            initialValue: false,
        }),
        defineField({
            name: 'facebookLink',
            title: 'Facebook Link',
            type: 'string',
        }),
        defineField({
            name: 'isShowLinkedInLink',
            title: 'Do you want to show "LinkedIn Link"?',
            type: 'boolean',
            description: 'Check this if you want to show "LinkedIn Link".',
            initialValue: false,
        }),
        defineField({
            name: 'linkedinLink',
            title: 'Linkedin Link',
            type: 'string',
        }),
        defineField({
            name: 'isShowInstaLink',
            title: 'Do you want to show "Instagram Link"?',
            type: 'boolean',
            description: 'Check this if you want to show "Instagram Link".',
            initialValue: false,
        }),
        defineField({
            name: 'instaLink',
            title: 'Instagram Link',
            type: 'string',
        }),
        defineField({
            name: 'isShowTwitterLink',
            title: 'Do you want to show "Twitter Link"?',
            type: 'boolean',
            description: 'Check this if you want to show "Twitter Link".',
            initialValue: false,
        }),
        defineField({
            name: 'twitterLink',
            title: 'Twitter Link',
            type: 'string'
        }),
        defineField({
            name: 'isShowThreadsLink',
            title: 'Do you want to show "Threads Link"?',
            type: 'boolean',
            description: 'Check this if you want to show "Threads Link".',
            initialValue: false,
        }),
        defineField({
            name: 'threadsLink',
            title: 'Threads Link',
            type: 'string'
        }),
        defineField({
            name: 'isShowYoutubeLink',
            title: 'Do you want to show "Youtube Link"?',
            type: 'boolean',
            description: 'Check this if you want to show "Youtube Link".',
            initialValue: false,
        }),
        defineField({
            name: 'youtubeLink',
            title: 'Youtube Link',
            type: 'string'
        })
    ]
})