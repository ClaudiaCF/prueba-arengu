import React from 'react';
import { renderComponent } from '../testHelpers';
import PlaylistCard from '../../components/PlaylistCard';
import * as getSpotifyCodeModule from '../../components/helpers';
import usePaletteModule from 'react-palette';

describe('PlaylistCard', () => {

  let fakePlaylist, wrapper;

  beforeEach(() => {
    fakePlaylist = {
      name: 'PlaylistName',
      description: 'PlaylistDescription',
      uri: 'spotify interal uri',
      images: [{height: 10, width: 10, url: 'http://example.com/imageUri'}]
    }
    jest.spyOn(getSpotifyCodeModule, 'getSpotifyCode').mockImplementation((color, uri) => `${color} ${uri}`);
    jest.spyOn(usePaletteModule, 'usePalette').mockImplementation(() => ({data: {muted: '#red'}}));
    wrapper = renderComponent(<PlaylistCard  playlist={fakePlaylist} />);
  })
   
  it("renders the playlist's name", () => {
    expect(wrapper.find('h2').text()).toEqual('PlaylistName');
  });

  it("renders the playlist's description", () => {
    expect(wrapper.find('h5').text()).toEqual('PlaylistDescription');
  });

  it("renders the playlist's cover image", () => {
    expect(wrapper.find('.playlist-img').prop('src')).toEqual('http://example.com/imageUri');
  });

  it("renders the spotify code image with the correct color", () => {
    expect(wrapper.find('.code').prop('src')).toEqual(`red ${fakePlaylist.uri}`);
  });

  it('adds css class when the like button is clicked', () => {
    const button = wrapper.find('.like');
    expect(wrapper.find('.like').prop('className')).toEqual(`like`);
    button.simulate('click');
    expect(wrapper.find('.like').prop('className')).toEqual(`like selected`);

  });
});