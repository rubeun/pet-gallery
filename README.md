# FE interview boilerplate

This boilerplate includes
- React
- Redux
- SASS
- Reselect
- Json server

## Start up

To start the applictaion run
`npm install`
`npm start`

To start the json server run
`npm run json-server`


## Json server

The json server includes two tables, one of cat images under `/cats` and one of dog images under `/dogs`.
The json server will run on port `3001`.


# The Project

Your making a site of your favorite type of animal (either a cat or dog obviously) and you want to display a grid of images where each image is centered with a 1:1 aspect ratio.
This grid needs to be responsive down to mobile.

Each image should have a click event that opens a modal and displays the image centered so you can adimre each creatures individual glory.

The modal should be made by you and not utilize an exteranl libraries (except React).
The modal should display full screen with a background overlay and the contentent centered in the viewport. Please a nice entrance and exit animation.

Images for your favorite animal are available via json server.

You can add any additional flair to you website as well as tests if you have time.
