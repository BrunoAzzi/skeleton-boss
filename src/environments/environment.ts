// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCzrB1FJGfhnwXKXHdEa0q9EbaHWNQEUK4',
    authDomain: 'skeleton-boss.firebaseapp.com',
    databaseURL: 'https://skeleton-boss.firebaseio.com',
    projectId: 'skeleton-boss',
    storageBucket: 'skeleton-boss.appspot.com',
    messagingSenderId: '494089296993'
  }
};
