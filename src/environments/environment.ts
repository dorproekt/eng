// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCdYY2hTBCiwoXS3s20BA9V2gsL8XcST9I',
    authDomain: 'learn-the-words.firebaseapp.com',
    databaseURL: 'https://learn-the-words.firebaseio.com',
    projectId: 'learn-the-words',
    storageBucket: 'learn-the-words.appspot.com',
    messagingSenderId: '948674546302'
  }
};
