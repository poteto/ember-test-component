/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'ember-lts-2.4',
      bower: {
        dependencies: {
          'ember': '~2.4.0'
        }
      }
    },
    {
      name: 'ember-lts-2.12',
      npm: {
        devDependencies: {
          'ember-source': '~2.12.0'
        }
      }
    },
    {
      name: 'ember-lts-2.16',
      npm: {
        devDependencies: {
          'ember-source': '~2.16.0'
        }
      }
    },
    {
      name: 'ember-lts-2.18',
      npm: {
        devDependencies: {
          'ember-source': '~2.18.0'
        }
      }
    },
    {
      name: 'ember-lts-3.4',
      npm: {
        devDependencies: {
          'ember-source': '~3.4.0'
        }
      }
    },
    {
      name: 'ember-latest',
      bower: {
        dependencies: {
          'ember': 'release'
        },
        resolutions: {
          'ember': 'release'
        }
      }
    },
    {
      name: 'ember-beta',
      allowedToFail: true,
      bower: {
        dependencies: {
          'ember': 'beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'ember-canary',
      allowedToFail: true,
      bower: {
        dependencies: {
          'ember': 'canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    },
    {
      name: 'ember-alpha',
      allowedToFail: true,
      bower: {
        dependencies: {
          'ember': 'alpha'
        },
        resolutions: {
          'ember': 'alpha'
        }
      }
    }
  ]
};
