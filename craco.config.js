const path = require('path');

module.exports = {
   style: {
        sass: {
          loaderOptions: {
            additionalData: `
              @import "src/styles/abstracts/_mixin.scss";
              @import "src/styles/abstracts/_variable.scss";
            `,
          },
        },
      },
};