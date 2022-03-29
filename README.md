
# prueba Arengu

## About
For my birthday this year I decided to create some 'real' mixtapes with my Spotify playlists, like in a jewel case and burned into real CDs. Inside they had a little card with a "QR-like" spotify code in order to let the people which I gave the cds to enjoy the music directly in Spotify even if they didn't have a CD player. Everything would have been so much easier if instead of going one by one to the playlists in my phone, taking an screenshot and color the image in a color that looked good with the cover colors, I would have created this 🤪

This apps allows you to see your Spotify playlists with that code I was talking about and some details like its name description and cover photo. I used an external library that gave me the prominent color from each cover (the 'muted' one, because if for example it was yellow, as the 'code' is white, it would be difficult to distinguish and the scanning doesn't work). You can favorite some of them in order to have an easy access, and you can also click on the cover photo in order to check the songs they have inside. I really liked creating this project so I expect you to have as much fun as I had developing this :)

## Project structure
* ```/components``` Contains PlaylistCard component along with its custom css file and a helper file with a method I use inside.
* ```/redux``` Everything related to the store, we can se two different folders with sagas and reducers and the file initizaling the store.
* ```/redux/reducers``` Folder with three files each representing one of the slices in which I divided the store.
* ```/redux/sagas``` Three different folders which contains the saga correspoding to each slice and also an API class extracting all the fetch methods. Also has a helpers file with methods for managing the auth logic, and a rootSaga in order to have every saga in one place (and use it in the store inicialization)
* ```/redux/tests``` Contains two different folders separating the views' tests to the component's ones. Also has a helpers file that allows me to 'decorate' the mount method needed for the tests. 
* ```/redux/views``` Contains 3 different files with the main views components. 
* ```/redux/App``` Main component used to basically initialize the router.
* ```/redux/styles``` Some default css and classes that are use all along the app.  

## Project setup

You can check the project deployed on [Vercel](https://prueba-arengu.vercel.app/) with my own playlists

**IMPORTANT NOTE: For the project to work locally you will need a .env with this two variables defined:
```
REACT_APP_SPOTIFY_CLIENT_ID=
REACT_APP_SPOTIFY_CLIENT_SECRET=
```
You can check how to get them here: https://developer.spotify.com/dashboard/

In order to run the project locally first you have to install the dependencies:
```
npm install
```

then you can run it by running the command:
```
npm run start
```
check the tests:
```
npm test
```
(probably you'll have to press 'a' after)

and in case you want the build you just have to run:
```
npm run build
```

## Design patterns

Along the project I could see the following patterns:
* Composite: It is used in all the views that have inside another components, in this example FavoritePlaylists and Playlists with PlaylistCard
* Decorator: It's used in the fetchSpotify method, as we are adding extra logic to the default fetch, and also in the renderComponent helper method from the tests, as I'm adding to the mount some initial state (and other options in case they were needed)
* Flux: Of course this pattern is used as well as I'm working with Redux and we centralize of all data in the store
* Observer: I think we can see a kind of observer pattern in the useEffect when we are defining some dependencies, as it could be the id in the Songs view

## Next steps?

For improving this project I would of course improve the styles as I did a very very basic design, as well as adding the logic to refresh the token in case you spent too much time in the app. Also some redux saga tests and better loadings and error handlings (right now the project is managing them but in a very simple way which could be improved and it will make sense to do if the project grows larger)
