/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import ray from './assets/images/ray.png';
import halo from './assets/images/Halo image-2.png';
import pentagram from './assets/images/pentagram image.png';

const etherealProducts = [
  // {
  //   id: 1,
  //   url: '/products/ray',
  //   name: 'Ethereal Ray',
  //   imgUrl: ray,
  //   width: '250',
  //   description: 'Smart Dual Extruder 3D Printer'
  // },
  {
    id: 2,
    url: '/products/halo',
    name: 'Ethereal Halo',
    imgUrl: halo,
    width: '300',
    description: 'Compact Simultaneous 5-Axis CNC Machine'
  },
  {
    id: 3,
    url: '/products/pentagram',
    name: 'Ethereal Pentagram',
    imgUrl: pentagram,
    width: '300',
    description: 'Simultaneous 5-Axis CNC Machine'
  }
];

export default etherealProducts;