export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'menuHeading1',
      title: 'Menu Heading 1',
      type: 'string',
    },
    {
      name: 'menuItems1',
      title: 'Menu Items 1',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'menuItems' } }],
    },
    {
      name: 'menuHeading2',
      title: 'Menu Heading 2',
      type: 'string',
    },
    {
      name: 'menuItems2',
      title: 'Menu Items 2',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'menuItems' } }],
    },
    {
      name: 'menuHeading3',
      title: 'Menu Heading 3',
      type: 'string',
    },
    {
      name: 'menuItems3',
      title: 'Menu Items 3',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'menuItems' } }],
    },
    {
      name: 'menuHeading4',
      title: 'Menu Heading 4',
      type: 'string',
    },
    {
      name: 'menuItems4',
      title: 'Menu Items 4',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'menuItems' } }],
    },
    {
      name: 'menuHeading5',
      title: 'Menu Heading 5',
      type: 'string',
    },
    {
      name: 'menuItems5',
      title: 'Menu Items 5',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'menuItems' } }],
    },
  ],
};
