// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  courses: {
    trending_higher_ed_courses: [
      { code: '1112P3032' },
      { code: 'S3242P3030' },
      { code: '2401AC01P3005' },
      { code: 'BMMA060101P1019' },
      { code: 'BEDPINP3006' },
      { code: 'BP121P3034' },
      { code: 'BMBBSP3010' },
      { code: 'M60112P3035'},
      { code: 'BMUSCMP17P4343' }
    ],
    trending_vet_courses: [
      { code: 'CHC30113' },
      { code: 'CHC33015' },
      { code: 'CHC51015' },
      { code: 'BSB30415' },
      { code: 'SHB20116' },
      { code: 'SHB30215' },
      { code: 'CPC30211' },
      { code: 'SHB30115' },
      { code: 'HLT33015' }
    ]
  },

  occupations: {
    trending: [
      { notation: '2723' },
      { notation: '2349' },
      { notation: '4413' },
      { notation: '2339' },
      { notation: '2544' },
      { notation: '2724' }
    ],
    skills_shortage: [
      { notation: '3223' },
      { notation: '3231' },
      { notation: '3312' },
      { notation: '3341' },
      { notation: '3424' },
      { notation: '3512' }
    ]
  },

  api_endpoint: '/api/',
  // api_endpoint: 'https://sit.myfuture.edu.au/api/',

  authenticate: {
    token_endpoint: 'http://localhost:60876/Sitefinity/Authenticate/OpenID/connect/token',
    client_id: '',
    client_secret: '',
    login_page: ['/']
  },

  title: {
    separator: ' - ',
    prefix: '',
    suffix: ' - myfuture'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
