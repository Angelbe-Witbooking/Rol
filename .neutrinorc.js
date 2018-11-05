module.exports = {
  use: [
    ['@neutrinojs/airbnb', {
      eslint: {
        rules: {
          "func-names": ["error", "never"],
          "import/no-extraneous-dependencies": ["error", {
            "devDependencies": true, "optionalDependencies": true,
            "peerDependencies": true
          }],
          "no-nested-ternary":"off",
          "react/react-in-jsx-scope": 'off',
          "react/forbid-prop-types": 'off',
        }
      }
    }],
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'FichasRol',
        },
      },
    ],
    '@neutrinojs/jest',
    {
      "linebreak-style":0
    }
  ],
};
