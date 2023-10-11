import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sectionImages',
  type: 'object',
  fields: [
    defineField({
      name: 'section1',
      title: 'Section 1 (Optional)',
      type: 'image',
      options: {
        placeholder: 'This image will goes underneath the challange section',
      },
    }),

    defineField({
      name: 'section2',
      title: 'Section 2 (Optional)',
      type: 'image',
      options: {
        placeholder: 'This Image goes underneath the "Social impact Section"',
      },
    }),
    defineField({
      name: 'section3',
      title: 'Section 3 (Optional)',
      type: 'image',
      options: {
        placeholder: 'This Image goes underneath the "Testmonials"',
      },
    }),
    defineField({
      name: 'section4',
      title: 'Section 4 (Optional)',
      type: 'image',
      options: {
        placeholder: 'This Image goes underneath the "Testmonials"',
      },
    }),
    defineField({
      name: 'section5',
      title: 'Section 5 (Optional)',
      type: 'image',
      options: {
        placeholder: 'This Image goes underneath the "Testmonials"',
      },
    }),
    defineField({
      name: 'section6',
      title: 'Section 6 (Optional)',
      type: 'image',
      options: {
        placeholder: 'This Image goes underneath the "Testmonials"',
      },
    }),
    defineField({
      name: 'section7',
      title: 'Section 7 (Optional)',
      type: 'image',
      options: {
        placeholder: 'This Image goes underneath the "Testmonials"',
      },
    }),
  ],
})
