const FILTER_DATA = [
  {
    ID: 'cats-per-page',
    TYPE: 'CHANGE_LIMIT',
    FILTER_NAME: 'Cats per page',
    OPTIONS: [
      {
        OPTION_VALUE: 4,
      },
      {
        OPTION_VALUE: 8,
      },
    ],
  },
  {
    ID: 'cats-order',
    TYPE: 'CHANGE_ORDER',
    FILTER_NAME: 'Order',
    OPTIONS: [
      {
        OPTION_VALUE: 'RANDOM',
        OPTION_NAME: 'Random',
      },
      {
        OPTION_VALUE: 'DESC',
        OPTION_NAME: 'Descending',
      },
      {
        OPTION_VALUE: 'ASC',
        OPTION_NAME: 'Ascending',
      },
    ],
  },
  {
    ID: 'cats-category',
    TYPE: 'CHANGE_CATEGORY',
    FILTER_NAME: 'Category',
    OPTIONS: [
      {
        OPTION_VALUE: '',
        OPTION_NAME: 'None',
      },
      {
        OPTION_VALUE: 5,
        OPTION_NAME: 'Boxes',
      },
      {
        OPTION_VALUE: 15,
        OPTION_NAME: 'Clothes',
      },
      {
        OPTION_VALUE: 1,
        OPTION_NAME: 'Hats',
      },
      {
        OPTION_VALUE: 14,
        OPTION_NAME: 'Sinks',
      },
      {
        OPTION_VALUE: 2,
        OPTION_NAME: 'Spaces',
      },
      {
        OPTION_VALUE: 4,
        OPTION_NAME: 'Sunglasses',
      },
      {
        OPTION_VALUE: 7,
        OPTION_NAME: 'Ties',
      },
    ],
  },
];

export default FILTER_DATA;
