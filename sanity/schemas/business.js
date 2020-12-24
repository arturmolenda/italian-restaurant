export default {
  name: 'businessData',
  title: 'Business Data',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'hours',
      title: 'Hours',
      description: 'i.e., 7:30 a.m. - 10.00 a.m. ',
      type: 'string',
    },
    {
      name: 'days',
      title: 'Days Open',
      description: 'i.e., Monday - Friday ',
      type: 'string',
    },
    {
      name: 'specialDay',
      title: 'Special open hours',
      description: 'i.e., Saturday 9:00 a.m - 6:00 p.m ',
      type: 'string',
    },
    {
      name: 'phoneNumber1',
      title: 'Phone Number1',
      type: 'string',
    },
    {
      name: 'phoneNumber2',
      title: 'Phone Number2',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
  ],
};
