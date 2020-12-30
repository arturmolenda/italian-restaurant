export default {
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'aboutUsImage',
      title: 'About Us Image',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'images' } }],
    },
    {
      name: 'aboutUs',
      title: 'About Us',
      type: 'blockContent',
    },
    {
      name: 'dishImage',
      title: 'Dish Image',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'images' } }],
    },
    {
      name: 'advantage1',
      title: 'Advantage 1',
      type: 'blockContent',
    },
    {
      name: 'advantage2',
      title: 'Advantage 2',
      type: 'blockContent',
    },
    {
      name: 'advantage3',
      title: 'Advantage 3',
      type: 'blockContent',
    },
    {
      name: 'advantage4',
      title: 'Advantage 4',
      type: 'blockContent',
    },
    {
      name: 'extraImage',
      title: 'Extra Image',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'images' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      imagesArray: 'imagesArray',
    },
    prepare: ({ title, dishImg }) => {
      return {
        title: title ? title : '',
        media: dishImg,
      };
    },
  },
};
