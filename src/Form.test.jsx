import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { mount } from 'enzyme';
import Form from './Form';

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

it('should render Form', () => {
  expect(
    ReactDOMServer.renderToStaticMarkup(
      <Form {...props} onChange={jest.fn()} />
    )
  ).toMatchSnapshot();
});

it('should trigger onChange with correct arguments', () => {
  const onChange = jest.fn();
  const value = 'value';
  const wrapper = mount(<Form {...props} onChange={onChange} />);

  // Ids of all the input elements.
  // Used to find element and trigger `change` event.
  const ids = [
    'givenName',
    'surname',
    'email',
    'phone',
    'houseName',
    'street',
    'suburb',
    'state',
    'postCode',
    'country',
  ];

  ids.forEach(id => {
    const input = wrapper.find(`#${id}`).at(1);
    input.simulate('change', { target: { value } });

    expect(onChange).toHaveBeenCalledWith(id, value);
  });
});
