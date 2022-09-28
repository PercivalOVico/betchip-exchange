export const announcement = {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
   
    {
      name: 'announcement_headline',
      title: 'announcement_headline',
      type: 'string',
    },
    {
      name: 'announcement_title',
      title: 'announcement_title',
      type: 'string',
    },
    {
      name: 'announcement_icon',
      title: 'announcement_icon',
      type: 'image',
       options: {
        hotspot: true,
      },
    },
    {
      name: 'announcement_image',
      title: 'announcement_image',
      type: 'image',
       options: {
        hotspot: true,
      },
    },
    {
      name: 'announcemant_content',
      title: 'announcement_content',
      type: 'string',
    },
    {
      title: 'announcement_category',
      name: 'announcement_category',
      type: 'string',
    },
     {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'announcement_title',
        maxLength: 96,
      },
    },
    {
      title: 'IsActive',
      name: 'isActive',
      type: 'boolean',
    },
    {
      title: 'Accounced Date',
      name: 'announcementAt',
      type: 'datetime',
    },
    {
      title: 'CreatedAt',
      name: 'createdAt',
      type: 'datetime',
    },
     {
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
      options: {
        disableNew: true,
      },
    },
  ],
};
