module.exports = {
  images: {
    domains: ['img.freepik.com'], 
  },
  async redirects() {
    
    return [
     
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
