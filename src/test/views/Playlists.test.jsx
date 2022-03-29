import React from 'react';
import { renderComponent } from '../testHelpers';
import Playlists from '../../views/Playlists';

describe('Playlists', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = renderComponent(<Playlists />, {
      initialState: {
        playlists: {
          playlists: [
            {id: 1, name: 'fakePlaylist1',
            description: 'PlaylistDescription1',
            uri: 'spotify interal uri1',
            images: [{height: 10, width: 10, url: 'http://example.com/imageUri1'}]},
            {id:2, name: 'fakePlaylist2',
            description: 'PlaylistDescription2',
            uri: 'spotify interal uri2',
            images: [{height: 10, width: 10, url: 'http://example.com/imageUri2'}]}
          ],
          favoritePlaylists: [],
          currentPlaylist: {}
        }
      }
    });
  })
   
  it("renders the playlists' title", () => {
    expect(wrapper.find('h1').text()).toEqual('Playlists');
  });

  it("renders the playlists' subtitle", () => {
    expect(wrapper.find('p.subtitle').text()).toEqual('Available playlists');
  });

  it("renders the playlists' link to favorites list", () => {
    expect(wrapper.find('a.link').text()).toEqual('Check your favorites :)');
  });

  it("renders the different playlists", () => {
    expect(wrapper.find('h2').at(0).text()).toEqual('fakePlaylist1')
    expect(wrapper.find('h2').at(1).text()).toEqual('fakePlaylist2')
  });

  it("renders the loading", () => {
    wrapper = renderComponent(<Playlists />, {
      initialState: {
        playlists: {
          isLoading: true
        }
      }
    });
    expect(wrapper.find('p.loading').text()).toEqual('Loading...');
  });

  it("renders the error", () => {
    wrapper = renderComponent(<Playlists />, {
      initialState: {
        playlists: {
          playlistsError: 'error'
        }
      }
    });
    expect(wrapper.find('p.error').text()).toEqual('Error: error');
  });

});