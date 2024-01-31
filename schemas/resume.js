export default {
  name: 'resume',
  type: 'document',
  title: 'Resume',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'city',
      type: 'string',
      title: 'City'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [{ type: 'string' }],
      validation: Rule => Rule.unique()
    },
    {
      name: 'experiences',
      type: 'array',
      title: 'Experience',
      of: [
        {
          name: 'experience',
          type: 'document',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title'
            },
            {
              name: 'company',
              type: 'string',
              title: 'Company'
            },
            {
              name: 'location',
              type: 'string',
              title: 'Location'
            },
            {
              name: 'startDate',
              type: 'date',
              title: 'Start Date'
            },
            {
              name: 'endDate',
              type: 'date',
              title: 'End Date'
            }
          ]
        }
      ]
    }
  ]
}