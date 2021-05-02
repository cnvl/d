import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// test('renders learn react link', () => {
//   const { getByText } = render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import store from '../redux/store';
import {
  getTitlesStart,
  getTitlesSuccess,
  getTitlesFailure,
  deleteTitle,
} from '../redux/slices/myListSlice';

const titles = [
  {
    id: '103663',
    title: 'The Hunt',
    mediaType: 'movie',
    posterPath: 'jkixsXzRh28q3PCqFoWcf7unghT.jpg',
    firebaseId: '12345',
  },
  {
    id: '550',
    title: 'Fight Club',
    mediaType: 'movie',
    posterPath: 'pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    firebaseId: '54321',
  },
];

it('Gets titles', () => {
  store.dispatch(getTitlesStart());
  let state = store.getState().myList;
  expect(state.loading).toBe(true);
  expect(state.error).toBe(null);
  expect(state.titles).toEqual([]);

  store.dispatch(getTitlesSuccess(titles));
  state = store.getState().myList;
  let title = state.titles.find((title) => title.id === '103663');
  expect(title?.id).toBe('103663');
  expect(title?.title).toBe('The Hunt');
  expect(title?.mediaType).toBe('movie');
  expect(title?.posterPath).toBe('jkixsXzRh28q3PCqFoWcf7unghT.jpg');
  expect(title?.firebaseId).toBe('12345');
  expect(state.loading).toBe(false);
});

test('Fails', async (done) => {
  try {
    throw new Error('Whoops!');
  } catch (error) {
    store.dispatch(getTitlesFailure(error.toString()));
    let state = store.getState().myList;
    expect(state.error).toBe(error.toString());
  }
});

// it('Fails to get titles', () => {
//   store.dispatch(getTitlesStart());
//   let state = store.getState().myList;
//   expect(state.loading).toBe(true);
//   expect(state.error).toBe(null);
//   expect(state.titles).toEqual([]);

//   store.dispatch(getTitlesFailure('404'));
//   state = store.getState().myList;
//   expect(state.loading).toBe(false);
//   expect(state.error).toBe('404');
//   expect(state.titles).toEqual([]);
// });

it('Removes a title', () => {
  store.dispatch(deleteTitle('12345'));
  let state = store.getState().myList;
  expect(state.titles).toEqual([
    {
      id: '550',
      title: 'Fight Club',
      mediaType: 'movie',
      posterPath: 'pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      firebaseId: '54321',
    },
  ]);
});

import store from '../redux/store';
import {
  getTitlesStart,
  getTitlesSuccess,
  getTitlesFailure,
  deleteTitle,
} from '../redux/slices/myListSlice';

const titles = [
  {
    id: '103663',
    title: 'The Hunt',
    mediaType: 'movie',
    posterPath: 'jkixsXzRh28q3PCqFoWcf7unghT.jpg',
    firebaseId: '12345',
  },
  {
    id: '550',
    title: 'Fight Club',
    mediaType: 'movie',
    posterPath: 'pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    firebaseId: '54321',
  },
];

test('My List Slice', () => {
  store.dispatch(getTitlesStart());
  let state = store.getState().myList;
  expect(state.loading).toBe(true);
  expect(state.error).toBe(null);
  expect(state.titles).toEqual([]);

  store.dispatch(getTitlesSuccess(titles));
  state = store.getState().myList;
  let title = state.titles.find((title) => title.id === '103663');
  expect(title?.id).toBe('103663');
  expect(title?.title).toBe('The Hunt');
  expect(title?.mediaType).toBe('movie');
  expect(title?.posterPath).toBe('jkixsXzRh28q3PCqFoWcf7unghT.jpg');
  expect(title?.firebaseId).toBe('12345');
  expect(state.loading).toBe(false);

  store.dispatch(deleteTitle('12345'));
  state = store.getState().myList;
  expect(state.titles).toEqual([titles[1]]);
});

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

// declare let global: { fetch: {} };

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         icon_url: 'https://image.png',
//         value: 'Joke text',
//       }),
//   })
// );
