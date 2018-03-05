import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Preview from './Preview';

it('should render Preview', () => {
  const props = {
    givenName: 'Sam',
    surname: 'Fairfax',
    email: 'Sam@fairfax.com',
    phone: '012223344',
    houseName: '2',
    street: 'King st',
    suburb: 'Sydney',
    state: 'NSW',
    postCode: '2000',
    country: 'Australia',
  };
  expect(
    ReactDOMServer.renderToStaticMarkup(<Preview {...props} />)
  ).toMatchSnapshot();
});
