module.exports = {
  images: {
    domains: ['img.freepik.com',
      'as2.ftcdn.net','avatars.githubusercontent.com',"as1.ftcdn.net",'placehold.co', 'images.unsplash.com',"assets.aceternity.com" ,"photoszone.net","upload.wikimedia.org",], //https://placehold.co/600x400?font=roboto
  },
  async redirects() {
    
    return [
     
      {
        source: '/',
        destination: '/welcome',
        permanent: true,
      },
    ];
  },
};
