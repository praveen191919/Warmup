// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // Initialize Firebase
  firebase:  {
    apiKey: "AIzaSyBg1JHkKzduuXCzO74PhMDimT2fS-X5fnc",
    authDomain: "warmup-23799.firebaseapp.com",
    databaseURL: "https://warmup-23799.firebaseio.com",
    projectId: "warmup-23799",
    storageBucket: "warmup-23799.appspot.com",
    messagingSenderId: "557237005663"
  }
};


