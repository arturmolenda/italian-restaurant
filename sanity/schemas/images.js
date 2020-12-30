export default {
  name: 'images',
  title: 'Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Optional',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Best to keep images 1920x1280',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Optional',
      type: 'text',
    },
    {
      name: 'showInGallery',
      title: 'Show In Gallery Page?',
      type: 'boolean',
    },
  ],
  initialValue: {
    showInGallery: true,
  },
  preview: {
    select: {
      title: 'title',
      description: 'description',
      image: 'image',
    },
    prepare: ({ title, image }) => {
      return {
        title: title ? title : '',
        media: image,
      };
    },
  },
};
