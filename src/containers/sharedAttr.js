import LoadingScreen from '../components/LoadingScreen/LoadingScreen.vue';

/*
  These are properties that are used on both the client and server side
  application. Place tags in metaInfo to be used by vue meta.
*/
export default {
  // all titles will be injected into this template
  metaInfo: {
    titleTemplate: 'License App',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'favicon', src: 'favicon.ico' },
    ],
  },
  components: {
    'loading-screen': LoadingScreen,
  },
};
