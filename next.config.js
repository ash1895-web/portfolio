module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/aseer-ansari-417603103/',
        permanent: false
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/Ansari_Aseer_',
        permanent: false
      },
      {
        source: '/github',
        destination: 'https://github.com/ash1895-web',
        permanent: false
      }
    ];
  }
}
