import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'challangeSection',
  type: 'object',
  fields: [
    defineField({
      name: 'isChallengeSection',
      title: 'Do you want to add "Challenge Section?"',
      type: 'boolean',
      description: 'Check this if you want to add "The Challenge" section in your case studies.',
      initialValue: false,
    }),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g: The Challenge.',
      options: {
        condition: ({ document }) => document.isCompleted === true,
        hidden: ({ document }) => !document.isChallengeSection,
      },
    },
    {
      name: 'whatWeDid',
      title: 'What We Did?',
      type: 'array',
      description: 'Explain what we Did.',
      options: {
        condition: ({ document }) => document.isCompleted === true,
        hidden: ({ document }) => !document.isChallengeSection,
      },
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'challangeText',
      title: 'Challange',
      type: 'array',
      description: 'Explain what challenges you faced during work.',
      options: {
        condition: ({ document }) => document.isCompleted === true,
        hidden: ({ document }) => !document.isChallengeSection,
      },
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      title: 'Image (Optional)',
      type: 'image',
      description:
        'This image goes next/underneath to "Challenge Section". Upload high-resolution and full-width image.',
      options: {
        condition: ({ document }) => document.isCompleted === true,
        hidden: ({ document }) => !document.isChallengeSection,
      },
    },
  ],
})
