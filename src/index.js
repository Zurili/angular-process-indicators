import * as ng                      from 'angular';
import { AnimatedProcessIndicator } from './animated-process-indicator';
import { ButtonProcessIndicator }   from './button-process-indicator';

import 'spinkit/css/spinkit.css';

export default ng
  .module('angular-process-indicators', [])
  .component('animatedProcessIndicator', AnimatedProcessIndicator)
  .component('buttonProcessIndicator', ButtonProcessIndicator)
  .name;
