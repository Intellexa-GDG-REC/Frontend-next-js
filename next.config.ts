module.exports = {
  images: {
    domains: ['img.freepik.com','avatars.githubusercontent.com','placehold.co', 'images.unsplash.com',"assets.aceternity.com" ,"photoszone.net"], //https://placehold.co/600x400?font=roboto
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
