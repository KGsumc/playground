import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g: Cy-Fair Animal Hospital.',
    }),
    defineField({
      name: 'id',
      type: 'number',
      title: 'ID',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'e.g: Veterinary Medicine.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Should be full width and high resolution',
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
    //fields for CHallange section /work
    defineField({
      name: 'challangeSection',
      type: 'challangeSection',
    }),
    // defineField({
    //   name: 'socialImpactSection',
    //   type: 'socialImpactSection',
    // }),
    defineField({
      name: 'sectionImages',
      type: 'sectionImages',
    }),
  ],
})
