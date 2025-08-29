module.exports = {
  apps: [
    {
      name: 'snip-nest-dev',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'snip-nest-test',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'test',
      },
    },
    {
      name: 'snip-nest-prod',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
