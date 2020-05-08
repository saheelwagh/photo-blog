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
    src : require('../assets/images/fulls/chicken.jpg'),
    thumbnail : require('../assets/images/thumbs/chicken.jpg'),
    title : 'Winner winner chicken dinner',
    desc: ' Wild hen',
  },
  {
    src : require('../assets/images/fulls/faceoff.jpg'),
    thumbnail : require('../assets/images/thumbs/faceoff.jpg'),
    title : 'Face-off',
    desc : 'inter species face-off',
  },
  {
    src : require('../assets/images/fulls/gossip.jpg'),
    thumbnail : require('../assets/images/thumbs/gossipgirls.jpg'),
    title : 'Gossip Girls',
    desc: 'Little birds indulged in gossip',
  },
  {
    src : require('../assets/images/thumbs/hornbill.jpg'),
    thumbnail : require('../assets/images/thumbs/hornbill.jpg'),
    title : 'Hornbill',
    desc : ' ',
  },
  {
    src : require('../assets/images/fulls/kingfisher.jpg'),
    thumbnail : require('../assets/images/fulls/kingfisher.jpg'),
    title : 'Kingfisher',
    desc : '',
  },
  {
    src : require('../assets/images/fulls/monsoon.jpg'),
    thumbnail : require('../assets/images/thumbs/monsooncover.jpg'),
    title : 'Monsoon Cover',
    desc : 'Over Taleigao Plateau'
  },
  {
    src : require('../assets/images/fulls/neck.jpg'),
    thumbnail : require('../assets/images/thumbs/necktilt.jpg'),
    title : 'Neck tilt',
    desc : '',
  },
  {
    src: require('../assets/images/fulls/nectar.jpg'),
    thumbnail : require('../assets/images/thumbs/nectar.jpg'),
    title : 'Enjoying a sip',
    desc : ' ',
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
    desc : 'Over Carambolim Lake',
  },
  {
    src : require('../assets/images/fulls/up.jpg'),
    thumbnail : require ('../assets/images/thumbs/up.jpg'),
    title : 'Looking Up',
    desc : ' ',
  }
 
];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
