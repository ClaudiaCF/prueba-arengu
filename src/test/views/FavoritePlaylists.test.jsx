import React from 'react';
import { renderComponent } from '../testHelpers';
import FavoritePlaylists from '../../views/FavoritePlaylists';

describe('Favorite playlists', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = renderComponent(<FavoritePlaylists />,{
      initialState: {
        playlists: {
          playlists: [],
          favoritePlaylists: [
            {id: 1, name: 'fakePlaylist1',
            description: 'PlaylistDescription1',
            uri: 'spotify interal uri1',
            images: [{height: 10, width: 10, url: 'http://example.com/imageUri1'}]},
            {id:2, name: 'fakePlaylist2',
            description: 'PlaylistDescription2',
            uri: 'spotify interal uri2',
            images: [{height: 10, width: 10, url: 'http://example.com/imageUri2'}]}
          ],
          currentPlaylist: {}
        }
      }
    });
  })
   
  it("renders the favorite playlists' title", () => {
    expect(wrapper.find('h1').text()).toEqual('Fav Playlists');
  });

  it("renders the favorite playlists' subtitle", () => {
    expect(wrapper.find('p').text()).toEqual('Favorite playlists');
  });

  it("renders the favorite playlists' link to main list", () => {
    expect(wrapper.find('a.link').text()).toEqual('Go back to your playlists');
  });

  it("renders the different favorite playlists", () => {
    expect(wrapper.find('h2').at(0).text()).toEqual('fakePlaylist1')
    expect(wrapper.find('h2').at(1).text()).toEqual('fakePlaylist2')
  });

});