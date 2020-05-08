import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  
  { 
    src : require('../assets/images/fulls/haridra.jpg'),
    thumbnail: require('../assets/images/thumbs/haridra.jpg'),
    title : 'Haridra',
    desc : 'Majestic yellow-black vistor in our backyard',
  },
  {
    src : require('../assets/images/fulls/wiiner winner wild chicken dinnner.jpg.jpg'),
    thumbnail : require('../assets/images/thumbs/winner winner wild chicken dinner.jpg'),
    title : 'Winner winner chicken dinner',
    desc: ' ',
  },
  {
    src : require('../assets/images/fulls/faceoff.jpg'),
    thumbnail : require('../assets/images/thumbs/faceoff.jpg'),
    title : 'Face-off',
    desc : 'inter species face-off'
  },
  {
    src : require('../assets/images/fulls/gossip girls.jpg'),
    thumbnail : require('../assets/images/thumbs/gossip girls.jpg'),
    title : 'Gossip Girls',
    desc: 'Little birds indulged in gossip'
  },
  {
    src : require('../assets/images/thumbs/hornbill.jpg'),
    thumbnail : require('../assets/images/thumbs/hornbill.jpg'),
    title : 'Hornbill',
    desc : ' '
  },
  {
    src : require('../assets/images/fulls/kingfisher.jpg'),
    thumbnail : require('../assets/images/fulls/kingfisher.jpg'),
    title : 'Kingfisher',
    desc : ''
  },
  {
    src : require('../assets/images/fulls/monsoon cover.jpg'),
    thumbnail : require('../assets/images/thumbs/monsoon cover.jpg'),
    title : 'Monsoon Cover',
    desc : 'Over Taleigao Plateau'
  },
  {
    src : require('../assets/images/fulls/neck tilt.jpg'),
    thumbnail : require('../assets/images/thumbs/neck tilt.jpg'),
    title : 'Neck tilt',
    desc : ''
  },
  {
    src: require('../assets/images/fulls/nectar of life.jpg'),
    thumbnail : require('../assets/images/thumbs/nectar of life.jpg'),
    title : 'Enjoying a sip',
    desc : ' '
  },
  {
    src : require('../assets/images/fulls/pattern.jpg'),
    thumbnail : require('../assets/images/fulls/pattern.jpg'),
    title : 'Pattern',
    desc : ' ',
  },
  {
    src : require('../assets/images/fulls/sunset.jpg'),
    thumbnail : require('../assets/images/thumbs/sunset.jpg'),
    title: 'Sunset',
    desc : 'Over Carambolim Lake'
  },
  {
    src : require('../assets/images/fulls/up.jpg'),
    thumbnail : require ('../assets/images/thumbs/up.jpg'),
    title : 'Looking Up',
    desc : ' '
  }
 
];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
