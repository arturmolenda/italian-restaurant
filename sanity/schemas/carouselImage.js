export default {
  name: 'carouselImages',
  title: 'Carousel Images',
  type: 'document',
  fields: [
    {
      name: 'imagesArray',
      title: 'Images Array',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'images' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      imagesArray: 'imagesArray',
    },
    prepare: () => {
      return {
        title: 'Images',
      };
    },
  },
};
