import React from 'react';
import { renderComponent } from '../testHelpers';
import Songs from '../../views/Songs';

describe('Songs', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = renderComponent(<Songs />, {
      initialState: {
        playlists:{
          currentPlaylist: {
            name: 'fakePlaylist'
          }
        },
        songs: {
          currentPlaylistSongs: [
            {track: {
              id: 1,
              name: 'song 1',
              album: {
                images: [{},{},{url: 'album1Cover'}]
              },
              artists: [{name: 'claudia1'}]
            }
          },
          {track:
            {
              id: 2,
              name: 'song 2',
              album: {
                images: [{},{},{url: 'album1Cover'}]
              },
              artists: [{name: 'claudia2'}]
            }
          }
          ]
        }
      }
    });
  })
   
  it("renders the songs' title", () => {
    expect(wrapper.find('h1').text()).toEqual('Songs');
  });

  it("renders the songs' subtitle", () => {
    expect(wrapper.find('p.subtitle').text()).toEqual("fakePlaylist's tracks");
  });

  it("renders the songs' link to main list", () => {
    expect(wrapper.find('a').text()).toEqual('Go back to your playlists');
  });

  it("renders the different songs", () => {
    expect(wrapper.find('h2').at(0).text()).toEqual('song 1 - claudia1')
    expect(wrapper.find('h2').at(1).text()).toEqual('song 2 - claudia2')
  });

  it("renders the loading", () => {
    wrapper = renderComponent(<Songs />, {
      initialState: {
        songs: {
          currentPlaylistSongs: [],
          isLoading: true
        }
      }
    });
    expect(wrapper.find('p.loading').text()).toEqual('Loading...');
  });

  it("renders the current playlist error", () => {
    wrapper = renderComponent(<Songs />, {
      initialState: {
        playlists: {
          currentPlaylistError: "error",
          currentPlaylist: { name: 'claudia'}
        }
      }
    });
    expect(wrapper.find('p.current-playlist-error').text()).toEqual('Error: error');
  });

  it("renders the songs error", () => {
    wrapper = renderComponent(<Songs />, {
      initialState: {
        songs: {
          currentPlaylistSongs: [],
          error: 'error'
        }
      }
    });
    expect(wrapper.find('p.songs-error').text()).toEqual('Error: error');
  });

});