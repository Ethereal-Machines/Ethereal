/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import multiple_tool_support from './assets/images/features-images/multiple_tool_support.png';
import multiple_material_support from './assets/images/features-images/multiple_material_support.png';
import high_accuracy_drive_mechanism from './assets/images/features-images/high_accuracy_drive_mechanism.png';
import desktop_size from './assets/images/features-images/desktop_size.png';
import dedicated_pc_based_controller from './assets/images/features-images/dedicated_pc_based_controller.png';
import advanced_nozzle_design from './assets/images/features-images/advanced_nozzle_design.png';
import additive_subtractive from './assets/images/features-images/additive_subtractive.png';
import five_axis_simultaneous from './assets/images/features-images/5_axis_simultaneous.png';

const etherealHalo = {
  features: [
    {
      id: 1,
      title: 'Compact Size',
      description: 'Designed and engineered to occupy minimal floor space.',
      imgUrl: desktop_size
    },
    {
      id: 2,
      title: '5-Axis Simultaneous Kinematics',
      description: 'Simultaneous 5-axis movement to help reduce machining time.',
      imgUrl: five_axis_simultaneous
    },
    {
      id: 3,
      title: 'High Accuracy Drive Mechanism',
      description: 'Achieved through utilization of highly accurately calibrated ball screws and linear guide rails.',
      imgUrl: high_accuracy_drive_mechanism
    },
    {
      id: 4,
      title: 'PC-Based Controller',
      description: ' Real time monitoring and control of the machining/printing job in the progress.',
      imgUrl: dedicated_pc_based_controller
    },
    {
      id: 5,
      title: 'Multiple Material Support',
      description: 'Flexibility to machine numerous Non-ferrous materials &amp; Plastic materials.',
      imgUrl: multiple_material_support
    },
    {
      id: 6,
      title: 'Automatic Tool Changer',
      description: 'Carrousel type ATC function that features a 12 pieces tool magazine.',
      imgUrl: multiple_tool_support
    },
  ],
  techSpecs: [
    {
      id: 1,
      title: '5 Axis Work Area',
      description: '150 Ø X 150 mm'
    },
    {
      id: 2,
      title: '3 Axis Work Area',
      description: '200 X 200 X 200mm'
    },
    {
      id: 3,
      title: 'Dimensions',
      description: '1300 x 1300 x 1290 mm'
    },
    {
      id: 4,
      title: 'Accuracy',
      description: '60 microns'
    },
    {
      id: 5,
      title: 'Load Bearing Capacity',
      description: '10 kgs'
    },
    {
      id: 6,
      title: 'Subtractive Manufacturing Materials',
      description: 'Wax, Foam, Plastics, Wood etc.'
    },
    {
      id: 7,
      title: 'Controller',
      description: 'Dedicated PC-Based Controller'
    },
    {
      id: 8,
      title: 'Additive Manufacturing Materials',
      description: 'ABS, PLA, PVA, PC, NYLON, PET-G etc.'
    },
    {
      id: 9,
      title: 'Extrusion Mechanism',
      description: 'Geared Extruder'
    },
    {
      id: 10,
      title: 'Spindle',
      description: 'Max Rating 2.2 kW, Max Speed 30,000 rpm, Tool Changer Carousel type, Capacity 12 Tools, Taper ISO 20'
    },
    {
      id: 11,
      title: 'Filament Diameter',
      description: '1.75 mm'
    },
    {
      id: 12,
      title: 'Extruder Temperature',
      description: 'Upto 285 Deg Celsius'
    },
    {
      id: 13,
      title: 'Working Speed',
      description: '1800 mm/min'
    },
    {
      id: 14,
      title: 'Power Requirement',
      description: '110-240 VAC, 2.5 kW'
    },
    {
      id: 15,
      title: 'TABLE SIZE',
      description: 'ø230mm'
    },
    {
      id: 16,
      title: 'Travel',
      description: '220 x 365 x 260 mm, A AXIS -30 deg to +110 deg x C AXIS 360 deg'
    },
    {
      id: 17,
      title: 'Footprint (in meters)',
      description: 'L*W*H 2 X 1.4 X 2.4, Weight 3500 Kgs'
    },
  ]
};

export default etherealHalo;