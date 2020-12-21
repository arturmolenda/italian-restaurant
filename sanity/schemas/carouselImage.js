export default {
  name: 'carouselImages',
  title: 'Carousel Images',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'images' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare: () => {
      return {
        title: 'Images',
      };
    },
  },
};
